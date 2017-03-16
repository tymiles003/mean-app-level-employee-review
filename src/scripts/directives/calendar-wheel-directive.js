(function(document, window, angular) {
    'use strict';

    var calendarWheelDirective = function() {
        return {
            restrict: 'E',
            link: link
        };

        function link(scope, element){
            /* render D3 Donut Chart for LVL Review Calendar Wheel */

            // 0- get the current Month
            var now = new Date;
            var currentMonth = now.getMonth();
            var currentMonth = 8; // temp hard-coding month for the UI

            // 1- define params for the svg
            var width = 400,
                height = 400,
                radius = Math.min(width, height) / 2;

            var svg = d3.select(element[0]).append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

            // 2- set up pie layout and needed arc generators
            var arc = d3.svg.arc()
                .outerRadius(radius - 10)
                .innerRadius(50); // > 0 for donut chart

            var labelArc = d3.svg.arc()
                .outerRadius(radius - 85)
                .innerRadius(radius - 80);

            var pie = d3.layout.pie()
                .sort(null)
                .value(function(d) { return d.sliceWidth; });

            // 3- Fetch the data and render data-driven chart
            d3.json("/assets/data/calendar-wheel-data.json", function(error, data) {
                if (error) { console.log(error) }

                var g = svg.selectAll(".arc")
                    .data(pie(data))
                    .enter().append("g")
                    .attr("class", "arc");

                g.append("path")
                    .attr("d", arc)
                    .attr("class", function(d) { return (d.data.sliceMonth === currentMonth ? "slice-active" : "slice"); });

                g.append("text")
                    .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
                    .attr("dy", ".75em")
                    .attr("dx", ".15em")
                    .attr("class", function(d) { return (d.data.sliceMonth === currentMonth ? "slice-text-active" : "slice-text"); })
                    .attr('text-anchor','middle')
                    .text(function(d) { return d.data.sliceLabel });

                g.append("text")
                    .attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
                    .attr("dy", "-.95em")
                    .attr("dx", ".15em")
                    .attr("class", function(d) { return (d.data.sliceMonth === currentMonth ? "slice-text-active" : "slice-text"); })
                    .attr('text-anchor','middle')
                    .text(function(d) { return d.data.sliceMonthLabel });
            });
        }
    };

    module.exports = calendarWheelDirective;

})(document, window, angular);
