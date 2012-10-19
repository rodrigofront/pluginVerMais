/*
 *  Project: Plugin Ver Mais    
 *  Description: Plugin para exibir determinado numero de boxes atraves de um link 
 *  Author: Rodrigo Nogueira
 *  License: 
 */

;(function ( $, window, undefined ) {
    var pluginName = 'verMais',
        document = window.document,
        defaults = {
            classLink : "ver-mais",
            classBoxes : "boxes",
            qtdShow : 5
        };

    // O verdadeiro construtor do plugin
    function Plugin( element, options ) {
        this.element = element;

        // jQuery tem um método 'extend' que mescla o conteúdo de dois ou
    // mais objetos, armazenando o resultado no primeiro objeto. O primeiro
    // objeto geralmente é vazio já que não queremos alterar os valores 
    // padrão para futuras instâncias do plugin
        this.options = $.extend( {}, defaults, options);        
        this._defaults = defaults;
        this._name = pluginName;        
        this.init();
    }

    Plugin.prototype.init = function () {
    // Coloque a lógica de inicialização aqui
    // Você já possui acesso ao elemento do DOM e as opções da instância
    // exemplo: this.element e this.options    
    
    $("."+this.options.classBoxes+"").hide();
    $("."+this.options.classBoxes+"").slice(0 , this.options.qtdShow).show();
    
    var boxes = this.options.classBoxes;
    var qtdTotal = this.options.qtdShow;
    var clicks = 0;
    var totalBoxes = $("."+this.options.classBoxes+"").length;
    var allClicks = Math.floor(totalBoxes/this.options.qtdShow);
    allClicks = ((totalBoxes%this.options.qtdShow == 0) ? allClicks - 1 : allClicks);    
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

    // Um invólucro realmente leve em torno do construtor,
  // prevenindo contra criação de múltiplas instâncias
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
            }
        });
    };
}(jQuery, window));