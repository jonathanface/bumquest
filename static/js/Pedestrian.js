class Pedestrian {
  
  constructor(area, pc) {
    var self = this;
    var direction = rand(0,1);
    var y = rand(area.pedestrianTrackLow, area.pedestrianTrackHigh);
    this.div = $('<div class="pedestrian"></div>');
    $(this.div).css('background-image', 'url(img/animations/pedestrian_left_1.gif)');
    if (direction) {
      $(this.div).css('background-image', 'url(img/animations/pedestrian_right_1.gif)');
    }
    
    $(this.div).click(function(event) {
      event.preventDefault();
      event.stopPropagation();
      console.log(generatePedestrianResponse());
      self.talk(generatePedestrianResponse());
    });
    
    $('main').append(this.div);
    var yRange = area.lowPoint - area.highPoint;
    var feetY = area.lowPoint - y;
    var percTraveled = (feetY/yRange).toFixed(2);
    var newH = $(this.div).height() - ($(this.div).height() * percTraveled);
    var heightPercDiff = newH / $(this.div).height();
    var newW = $(this.div).width() * heightPercDiff;
    $(this.div).css('height', newH);
    $(this.div).css('width', newW);
    var destination;
    $(this.div).css('left', 0 - $(this.div).width());
    destination = $('main').width();
    if (direction) {
      $(this.div).css('left', $('main').width() + $(this.div).width());
      destination = 0 - $(this.div).width();
    }
    $(this.div).css('top', y - newH);
    $(this.div).css('z-index', y);
    if (pc.isBabbling) {
      $.getJSON(SERVICE_URL + '/pedestrianReaction', function(data) {
        if (data.positive == true) {
          pc.cash_earned += parseFloat(data.money);
          self.talk(generatePedestrianSympathy());
        } else {
          self.talk(generatePedestrianJeer());
        }
      });
        
    }
    $(this.div).animate({
      left: destination
    },{
      step: function() {
        self.positionBubble();
      },
      duration: rand(3000, 8000),
      complete: function() {
        self.shutup(function() {$(self.div).remove();});
      }
    });
  }

  shutup(callback) {
    var self = this;
    clearTimeout($(this.div).data('speechTimer'));
    if ($(this.div).data('bubble')) {
      $(this.div).data('bubble').fadeOut('fast', function() {
        $(this).remove();
        $(self.div).data('bubble', null);
        if (callback) {
          callback();
        }
      });
    }
  }

  positionBubble() {
    if ($(this.div).data('bubble')) {
      $(this.div).data('bubble').css('left', $(this.div).offset().left-20).css('top', $(this.div).position().top - $(this.div).data('bubble').height() + 20);
    }
  }

  talk(text) {
    var bubble = $('<div class="speechContainer"></div>');
    $(bubble).append('<div class="speechBubble">' + text + '</div>');
    $(this.div).data('bubble', bubble);
    $(document.body).append(bubble);
    this.positionBubble();
    $(bubble).fadeTo('fast', 1);
  }
}