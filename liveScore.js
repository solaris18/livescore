jQuery.fn.liveScore = function (config) {
  var $this = this,
  $header,
  $headerTitle,
  $content,
  rows = [];

  config = jQuery.extend({
    title: 'Live Score',
    data: []
  }, config);

  function renderLayout() {
    $this.addClass('ls-container');

    $header = jQuery('<div />');
    $header.addClass('ls-header');
    $header.appendTo($this);

    $headerTitle = jQuery('<h3 />');
    $headerTitle.html(config.title);
    $headerTitle.appendTo($header);

    $content = jQuery('<div />');
    $content.addClass('ls-content');
    $content.appendTo($this);
  }

  function renderContent() {
    var i, $row,
    $labelDate,
    $labelTime,
    $labelQueue,
    $timeline,
    $score,
    $twitter;

    for (i = 0; i < config.data.length; i += 1) {
      $row = jQuery('<div />');
      $row.addClass('ls-row');
      $row.appendTo($content);

      $labelDate = jQuery('<label />');
      $labelDate.addClass('ls-row-date');
      $labelDate.appendTo($row);
      $labelDate.html(config.data[i].time[0]);

      $labelTime = jQuery('<label />');
      $labelTime.addClass('ls-row-time');
      $labelTime.appendTo($row);
      $labelTime.html(config.data[i].time[1]);

      $labelQueue = jQuery('<div />');
      $labelQueue.addClass('ls-row-queue');
      $labelQueue.appendTo($row);
      $labelQueue.html('F' + (i + 1));

      $match = jQuery('<div />');
      $match.addClass('ls-row-match')
      $match.appendTo($row);

      $player1team = jQuery('<label />');
      $player1team.addClass('ls-row-player');
      $player1team.html(config.data[i].players[0]);
      $player1team.appendTo($match);

      $player1score = jQuery('<label />');
      $player1score.addClass('ls-row-score');
      $player1score.html(config.data[i].currentScore[0]);
      $player1score.appendTo($match);

      jQuery('<div />').addClass('clear').addClass('ls-row-separator').appendTo($match);

      $player2team = jQuery('<label />');
      $player2team.addClass('ls-row-player');
      $player2team.html(config.data[i].players[1]);
      $player2team.appendTo($match);

      $player2score = jQuery('<label />');
      $player2score.addClass('ls-row-score');
      $player2score.html(config.data[i].currentScore[1]);
      $player2score.appendTo($match);

      $twitter = jQuery('<button />');
      $twitter.addClass('ls-row-twitter');
      $twitter.appendTo($row);

      $('<i />').addClass('fa fa-twitter').appendTo($twitter);

      if (i + 1 == config.data.length) {
        $row.addClass('ls-row-last');
      }

      rows.push($row);
    }
  }

  renderLayout();
  renderContent();

  return this;
}