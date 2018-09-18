package im.jjf.bumquest;

import android.animation.ValueAnimator;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.MotionEvent;
import android.util.Log;
import android.view.View;
import android.view.ViewTreeObserver;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.graphics.Bitmap;
import android.widget.TextView;

import com.bumptech.glide.request.target.DrawableImageViewTarget;
import com.bumptech.glide.request.target.SizeReadyCallback;


public class MainActivity extends AppCompatActivity {

    private int img_state = 2131099735;
    private int org_bum_height = 0;
    private int org_bum_width = 0;

    private void logit(String data) {
        Log.wtf("logging", String.valueOf(data));
    }

    private void setRelativeHeight(ImageView person, float percent) {
        if (percent > 1) {
            percent = 1f;
        }
        if (percent < 0.3) {
            percent = 0.3f;
        }
        int scaleX = Math.round(org_bum_width * percent);
        int scaleY = Math.round(org_bum_height * percent);
        Log.wtf("perc", String.valueOf(percent));
        person.getLayoutParams().height = scaleY;
        person.getLayoutParams().width = scaleX;
        float newY = person.getY() + Math.abs(org_bum_height - person.getHeight());
        float newX = person.getX() - (Math.abs(org_bum_width - person.getWidth()))/2;
        person.setY(newY);
        person.setX(newX);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        LinearLayout walk = findViewById(R.id.walk);
        walk.setDrawingCacheEnabled(true);

        final ImageView bum = findViewById(R.id.bum);
        ViewTreeObserver vto = bum.getViewTreeObserver();
        vto.addOnPreDrawListener(new ViewTreeObserver.OnPreDrawListener() {
            public boolean onPreDraw() {
                bum.getViewTreeObserver().removeOnPreDrawListener(this);
                org_bum_height = bum.getMeasuredHeight();
                org_bum_width = bum.getMeasuredWidth();
                return true;
            }
        });



        walk.setOnTouchListener(new View.OnTouchListener() {
            @Override
            public boolean onTouch(View view, MotionEvent event) {


                if (event.getAction() == MotionEvent.ACTION_UP) {
                    Bitmap bmp = Bitmap.createBitmap(view.getDrawingCache());
                    int color = bmp.getPixel((int) event.getX(), (int) event.getY());
                    if (color != -22009) {
                        return false;
                    }


                    final float startX = bum.getX();
                    final float startY = bum.getY();
                    final float endX = event.getX() - bum.getWidth()/2;
                    final float endY = event.getY() - bum.getHeight();

                    ValueAnimator animator;
                    if (Math.abs(startX - endX) > Math.abs(startY - endY)) {
                        animator = ValueAnimator.ofFloat(startX, endX);
                    } else {
                        animator = ValueAnimator.ofFloat(startY, endY);
                    }
                    //animator = ValueAnimator.ofFloat(startX, endX);
                    animator.setDuration(500);
                    animator.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() {
                        @Override
                        public void onAnimationUpdate(ValueAnimator animation) {
                            float fraction = animation.getAnimatedFraction();
                            float newX = startX + fraction * (endX - startX);
                            float newY = startY + fraction * (endY - startY);
                            bum.setX(newX);
                            bum.setY(newY);
                            if (org_bum_height != 0 && org_bum_width != 0) {
                                ImageView area = findViewById(R.id.area);
                                int areaH = area.getHeight();
                                float perc = ((newY + org_bum_height) / areaH);
                                setRelativeHeight(bum, perc);
                            }
                            int img = R.drawable.bum_default;
                            if (endX < bum.getX()) {
                                img = R.drawable.bum_walk_left;
                            } else if (endX > bum.getX()) {
                                img = R.drawable.bum_walk_right;
                            } else if (endY < bum.getY()) {
                                img = R.drawable.bum_walk_up;
                            } else if (endY > bum.getY()) {
                                img = R.drawable.bum_walk_down;
                            }

                            //Log.wtf("perc", String.valueOf(Math.round(perc)));
                            DrawableImageViewTarget bumTarget = new DrawableImageViewTarget(bum);
                            if (img_state != img) {
                                GlideApp.with(getApplicationContext()).load(img).into(bumTarget);
                                img_state = img;
                            }
                        }
                    });
                    animator.start();
                }
                return true;
            }

        });

    }
}
