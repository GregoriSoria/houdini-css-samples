// 2) Criamos uma classe que terá as lógicas
// para manipular o paint do elemento que tiver usando
class TransparentCircleZoomPainter {
    static get inputProperties(){
        return ['--transparent-circle-zoom', '--background-color']
    }

    clearCircle(context,x,y,zoom) {
        context.save();
        context.beginPath();
        context.arc(x, y, zoom, 0, 2*Math.PI, true);
        context.clip();
        context.clearRect(x - zoom,y - zoom,zoom*2,zoom*2);
        context.restore();
    }

    paint(ctx, geom, props){ // 3) ctx tem o elemento
        const zoomValue = props.get('--transparent-circle-zoom').toString()
        const bgColor = props.get('--background-color').toString()
        console.log(zoomValue)
        console.log(ctx)

        ctx.fillStyle = bgColor; // fixed color
        ctx.fillRect(0, 0, geom.width, geom.height);
        
        this.clearCircle(ctx, geom.width/2, geom.height/2, zoomValue);

    }
}

// 4) Registrando a classe com um nome para chamarmos
// background-image: paint(transparent-circle-zoom);
registerPaint('transparent-circle-zoom', TransparentCircleZoomPainter);