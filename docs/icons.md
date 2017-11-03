Those are all the icons available in the SVG sprite, i.e. that you can use like `ecommerce` here:

```html
{% render '@icon' %}
```

See the icon component for details.

{% for group, list in icons -%}
## {{ group }}
{% include '@icons-list' %}
{% endfor -%}
