

$(document).ready(function() {
    console.log("Hello world.")

    var mysvg = d3.select('.chart')
    	.append('svg')
    	.attr('width','100%')
    	.attr('height','100%');

    var myarray = [10,20,40,50,100];

    mysvg.selectAll('circle').data(myarray)
    	.enter()
    	.append('circle')
    	.attr('class','mycircs')
    	.attr('cx',function(d){
    		return d*6;
    	})
    	.attr('cy',function(d){
    		return d*5;
    	})
    	.attr('r',function(d){
    		return d;
    	})
    	.style('fill',function(d){
    		if(d>45){
    			return 'orange'
    		} else {
    			return 'green'
    		}
    	})
    	.on('mouseover',function(d){

    		d3.selectAll("circle").transition()
    			.attr('r',function(d){
    				return d*0.2;
    			})

    	})
    	.on('mouseout',function(d){

    		d3.selectAll("circle").transition()
    			.attr('r',function(d){
    				return d;
    			})

    	});


});






