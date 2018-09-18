import { Component } from 'react'

export interface FocusTrapProperties {
  /**
   * Controls rendering. When true, the FocusTrap will render
   * Default: true
   */
  active?: boolean
  /**
   * The class of the inner container that maintains focus
   * Default: "focus-trap"
   */
  className?: string
  /**
   * Callback when the escape key or an outside click occurs
   * Default: null
   */
  onExit?: () => void
  /**
   * The tag name of the inner container
   * Default: "div"
   */
  element?: string
  /**
   * The aria role for the inner container
   * Default: "dialog"
   */
  role?: string
}

declare class FocusTrap extends Component<FocusTrapProperties, any> {}

export default FocusTrap
