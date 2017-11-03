<div class="grid-list">
{% for icon in list -%}
<div class="grid-list__item">
    <div class="icon">
        <svg>
          <use xlink:href="{{ '/assets/icons.svg' | path }}#{{ icon }}" />
        </svg>
        {{ icon }}
    </div>
</div>
{% endfor -%}
</div>
