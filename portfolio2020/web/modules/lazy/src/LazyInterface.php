<?php

namespace Drupal\lazy;

/**
 * Interface LazyInterface.
 */
interface LazyInterface {

  /**
   * List of available plugins.
   *
   * @return array
   *   Returns an array of all available lazysizes plugins.
   */
  public function getPlugins():array;

  /**
   * Is Lazy enabled.
   *
   * @return array|false
   *   Returns module configuration (lazy.settings) if there's any fields or
   *   text-format has lazy-load enabled. FALSE otherwise.
   */
  public function isEnabled();

  /**
   * Check whether any fields enabled.
   *
   * @param array $image_fields
   *   Array of image field names keyed in following format:
   *   {media-type}--{bundle}--{field_name}--{view-mode}.
   *
   * @return array|false
   *   Return an array of field names that enabled Lazy-load, FALSE otherwise.
   */
  public function isFieldsEnabled(array $image_fields);

  /**
   * Check whether any text-format filters enabled.
   *
   * @return array|false
   *   Returns an array of filters that has enabled Lazy-load, FALSE otherwise.
   */
  public function isFiltersEnabled();

  /**
   * Checks whether lazy-load is disabled for the current path.
   *
   * @param string $disabled_paths
   *   List of paths Lazy should be disabled.
   *
   * @return bool
   *   Whether Lazy is disabled for the requested path.
   */
  public function isPathAllowed($disabled_paths): bool;

}
