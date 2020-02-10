# Lazy-load

This is a simple Drupal module which lets you enable lazy-loading images and 
iframes.


## How to use

Lazy-loading can be enabled in 3 different ways:

 1. Lazy-load filter in `text-formats` for inline-images, and iframes.
 2. Image field in entity types, via third-party settings for supported field 
    formatters, and also via extended versions of Image and Responsive image 
    formatters.
 3. In your theme via altering the image markup manually.


## About

This module depends on the [lazysizes](https://github.com/aFarkas/lazysizes) library.
> High performance and SEO friendly lazy loader for images (responsive and 
> normal), iframes and more, that detects any visibility changes triggered 
> through user interaction, CSS or JavaScript without configuration.


## 3.0 Features

* Now uses [lazysizes](https://github.com/aFarkas/lazysizes) library for rich features
* Supports **inline-images** and **inline-iframes** (Enabled per text-format)
* Supports **image fields** with following field formatters:
    - Colorbox `colorbox`
    - Image `image`
    - Responsive image `responsive_image`
    - Media Thumbnail `media_thumbnail`
* Provide a `hook_lazy_field_formatters_alter(&$formatters)` hook for adding 
  field formatters
* Supports native `loading="auto"` attribute for Chrome browsers.


## Breaking changes since 2.x

> If you're looking for 8.x-2.x documentation go to https://git.drupalcode.org/project/lazy/blob/8.x-2.x/README.md

**[bLazy](http://dinbror.dk/blazy/) library replaced with [lazysizes](https://github.com/aFarkas/lazysizes).**  
If you customized the bLazy configuration in 8.x-2.x, you should checkout the 
documentation for code-migration options for lazysizes.


## Documentation

* [Lazy-load 8.x-3.x](https://www.drupal.org/docs/8/modules/lazy-load)
* [Lazy-load 8.x-2.x](https://git.drupalcode.org/project/lazy/blob/8.x-2.x/README.md)
* [Lazy-load 7.x](https://www.drupal.org/docs/7/modules/lazy-load)


## Change records for Lazy-load

https://www.drupal.org/list-changes/lazy
