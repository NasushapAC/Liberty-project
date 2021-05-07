import React from "react";

import './input.css';

function customInput() {
    return (
      <div class="page">
        {/* <label class="field field_v1">
          <input class="field__input" placeholder="e.g. Name Here" />
          <span class="field__label-wrap">
            <span class="field__label">URL :</span>
          </span>
        </label> */}
        <label class="field field_v2">
          <input class="field__input" placeholder="e.g. Enter URL Here" />
          <span class="field__label-wrap">
            <span class="field__label">URL :</span>
          </span>
        </label>
        <label class="field field_v2">
          <input class="field__input" placeholder="e.g. Enter Alter Here" />
          <span class="field__label-wrap">
            <span class="field__label">Alter :</span>
          </span>
        </label>
        <label class="field field_v2">
          <input class="field__input" placeholder="e.g. Industry Name Here" />
          <span class="field__label-wrap">
            <span class="field__label">Industry :</span>
          </span>
        </label>
        {/* <label class="field field_v3">
          <input class="field__input" placeholder="e.g. Gmail@Live.Yahoo" />
          <span class="field__label-wrap">
            <span class="field__label">E-mail</span>
          </span>
        </label> */}
      </div>
    );
};
export default customInput;