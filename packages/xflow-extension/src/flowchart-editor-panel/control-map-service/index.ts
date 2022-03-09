import { NodeStyle } from './components/node-style'
import { NodeText } from './components/node-text'
import { NodeArrange } from './components/node-arrange'
import { EdgeService } from './components/edge'
import { CanvasService } from './components/canvas'
import { EditorPanels } from './components/fields'

/** 默认支持修改标签和重命名功能 */
export const defaultControlMapService = controlMap => {
  controlMap.set('node-style', NodeStyle)
  controlMap.set('node-text', NodeText)
  controlMap.set('node-arrange', NodeArrange)
  controlMap.set('edge-service', EdgeService)
  controlMap.set('canvas-service', CanvasService)
  return controlMap
}

export {
  NodeStyle,
  NodeText,
  NodeArrange,
  EditorPanels,
  EdgeService,
  CanvasService,
}
