---
to: src/components/<%= name %>/<%= h.changeCase.lcFirst(name) %>.stories.js
---

import <%= name %> from ".";
import React from 'react'

import 'story.css'

export default {
    title: "<%= name %>",
    component: <%= name %>,
}

export const Default = () => <<%= name %>>默认</<%= name %>>;