import {
  LitElement,
  html,
  css,
  customElement,
  property,
  CSSResult,
  TemplateResult,
} from "lit-element";
import { styleMap } from "lit-html/directives/style-map";

@customElement("light-it-up")
export class LightItUp extends LitElement {
  @property({ type: String }) public label = "";
  @property({ type: String }) public boxColor = "#000";
  @property({ type: String }) public lightColor = "#3F88C5";

  public static get styles(): CSSResult {
    return css`
      .box {
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .light {
        width: 50%;
        height: 50%;
        background-color: #ffffff;
        border-radius: 50%;
        filter: blur(20px);
        animation-name: pulse;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-timing-function: ease-out;
      }
      @keyframes pulse {
        from {
          transform: scale(1);
        }
        to {
          transform: scale(0.2);
        }
      }
    `;
  }

  // Implement `render` to define a template for your element.
  protected render(): TemplateResult | "" {
    return html`<div
      class="box"
      style="${styleMap({ backgroundColor: this.boxColor })}"
    >
      <div
        class="light"
        style="${styleMap({ backgroundColor: this.lightColor })}"
      ></div>
    </div>`;
  }
}
