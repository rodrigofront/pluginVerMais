/*
 *  Project: Plugin Ver Mais    
 *  Description: Plugin para exibir determinado numero de boxes atraves de um link 
 *  Author: Rodrigo Nogueira
 */

;(function ( $, window, undefined ) {
    var pluginName = 'verMais',
        document = window.document,
        defaults = {
            classLink : "ver-mais",
            classBoxes : "boxes",
            qtdShow : 5
        };
    function Plugin( element, options ) {
        this.element = element;
        this.options = $.extend( {}, defaults, options);        
        this._defaults = defaults;
        this._name = pluginName;        
        this.init();
    }

    Plugin.prototype.init = function () {
    //inicio todos os boxes escondidos
    $("."+this.options.classBoxes+"").hide();
    //so mostro a quantidade de boxes escolhida
    $("."+this.options.classBoxes+"").slice(0 , this.options.qtdShow).show();
    var boxes = this.options.classBoxes;
    var qtdTotal = this.options.qtdShow;
    var clicks = 0;
    //pego o total de boxes existentes
    var totalBoxes = $("."+this.options.classBoxes+"").length;
    //divido esse total pelo numero de exibidos para saber quantos cliques devo dar
    var allClicks = Math.floor(totalBoxes/this.options.qtdShow);
    //verifico se a divisao do total pelo num de exibido e resto 0, se for devo dar um clique a menos
    allClicks = ((totalBoxes%this.options.qtdShow == 0) ? allClicks - 1 : allClicks);    
    //variaves para mostrar os itens 
    var start = this.options.qtdShow;
    var end = start + this.options.qtdShow;
    var link = this.options.classLink;
    $("."+link+"").click(function(e){
      e.preventDefault();
      clicks++;
      if (allClicks > clicks) {
        $("."+boxes+"").slice(start , end).show();  
      }
      else {
        $("."+boxes+"").slice(start , end).show();
        $("."+link+"").hide(); 
      }
      
     start += qtdTotal
     end += qtdTotal
      });
    };
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
            }
        });
    };
}(jQuery, window));