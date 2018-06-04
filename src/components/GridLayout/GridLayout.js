import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import styled from "styled-components";

const ResponsiveGridLayout = WidthProvider(Responsive);

const GridItem = styled.div`
  border: #000 1px solid;
  align-items: center;
  justify-content: center;
  display: flex;
`;

class DemoGrid extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: "a", x: 1, y: 0, w: 1, h: 1 },
      { i: "b", x: 1, y: 2, w: 2, h: 1 },
      { i: "c", x: 2, y: 3, w: 1, h: 1 },
      { i: "d", x: 2, y: 4, w: 1, h: 1 },
      { i: "e", x: 2, y: 5, w: 1, h: 1 },
      { i: "f", x: 2, y: 6, w: 1, h: 1 },
      { i: "g", x: 2, y: 7, w: 1, h: 1 },
      { i: "h", x: 2, y: 8, w: 1, h: 1 },
    ];
    return (
      <ResponsiveGridLayout
        {...this.props}
        isResizable
        rowHeight={200}
        measureBeforeMount
        layouts={{ lg: layout, md: layout, sm: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 4, md: 4, sm: 2, xs: 2, xxs: 1 }}>
        {
          layout.map((item) => <GridItem key={item.i}>{item.i}</GridItem>)
        }
      </ResponsiveGridLayout>
    );
  }
}

export default styled(DemoGrid) `

  .react-grid-layout {
    position: relative;
    transition: height 200ms ease;
  }
  .react-grid-item {
    transition: all 200ms ease;
    transition-property: left, top;
  }
  .react-grid-item.cssTransforms {
    transition-property: transform;
  }
  .react-grid-item.resizing {
    z-index: 1;
    will-change: width, height;
  }

  .react-grid-item.react-draggable-dragging {
    transition: none;
    z-index: 3;
    will-change: transform;
  }

  .react-grid-item.react-grid-placeholder {
    background: mediumpurple;
    opacity: 0.2;
    transition-duration: 100ms;
    z-index: 2;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  .react-grid-item > .react-resizable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: 0;
    right: 0;
    cursor: se-resize;
  }

  .react-grid-item > .react-resizable-handle::after {
    content: "";
    position: absolute;
    right: 3px;
    bottom: 3px;
    width: 5px;
    height: 5px;
    border-right: 2px solid rgba(0, 0, 0, 0.4);
    border-bottom: 2px solid rgba(0, 0, 0, 0.4);
  }
`;
