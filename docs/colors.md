Please prefer the variable over hardcoded value in Sass files.

{% for palette, values in colors %}
## {{ palette }}
{% include "@color" %}
{% endfor %}
