<?php

namespace Drupal\lazy;

use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Path\AliasManagerInterface;
use Drupal\Core\Path\CurrentPathStack;
use Drupal\Core\Path\PathMatcherInterface;

/**
 * Class Lazy.
 */
class Lazy implements LazyInterface {

  /**
   * Defines the interface for a configuration object factory.
   *
   * @var \Drupal\Core\Config\ConfigFactoryInterface
   */
  protected $configFactory;

  /**
   * Represents the current path for the current request.
   *
   * @var \Drupal\Core\Path\CurrentPathStack
   */
  protected $pathCurrent;

  /**
   * Find an alias for a path and vice versa.
   *
   * @var \Drupal\Core\Path\AliasManagerInterface
   */
  protected $pathAliasManager;

  /**
   * Provides an interface for URL path matchers.
   *
   * @var \Drupal\Core\Path\PathMatcherInterface
   */
  protected $pathMatcher;

  /**
   * Lazy constructor.
   *
   * @param \Drupal\Core\Config\ConfigFactoryInterface $config_factory
   *   The config factory service.
   * @param \Drupal\Core\Path\CurrentPathStack $current_path
   *   The current path stack.
   * @param \Drupal\Core\Path\AliasManagerInterface $alias_manager
   *   The alias manager.
   * @param \Drupal\Core\Path\PathMatcherInterface $path_matcher
   *   The path matcher service.
   */
  public function __construct(ConfigFactoryInterface $config_factory, CurrentPathStack $current_path, AliasManagerInterface $alias_manager, PathMatcherInterface $path_matcher) {
    $this->configFactory = $config_factory;
    $this->pathCurrent = $current_path;
    $this->pathAliasManager = $alias_manager;
    $this->pathMatcher = $path_matcher;
  }

  /**
   * {@inheritdoc}
   */
  public function getPlugins(): array {
    return [
      'artdirect' => 'artdirect/ls.artdirect',
      'aspectratio' => 'aspectratio/ls.aspectratio',
      'attrchange' => 'attrchange/ls.attrchange',
      'bgset' => 'bgset/ls.bgset',
      'blur-up' => 'blur-up/ls.blur-up',
      'custommedia' => 'custommedia/ls.custommedia',
      'fix-edge-h-descriptor' => 'fix-edge-h-descriptor/ls.fix-edge-h-descriptor',
      'fix-ios-sizes' => 'fix-ios-sizes/fix-ios-sizes',
      'include' => 'include/ls.include',
      'native-loading' => 'native-loading/ls.native-loading',
      'noscript' => 'noscript/ls.noscript',
      'object-fit' => 'object-fit/ls.object-fit',
      'optimumx' => 'optimumx/ls.optimumx',
      'parent-fit' => 'parent-fit/ls.parent-fit',
      'print' => 'print/ls.print',
      'progressive' => 'progressive/ls.progressive',
      'respimg' => 'respimg/ls.respimg',
      'rias' => 'rias/ls.rias',
      'static-gecko-picture' => 'static-gecko-picture/ls.static-gecko-picture',
      'twitter' => 'twitter/ls.twitter',
      'unload' => 'unload/ls.unload',
      'unveilhooks' => 'unveilhooks/ls.unveilhooks',
      'video-embed' => 'video-embed/ls.video-embed',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function isEnabled() {
    $config = $this->configFactory->get('lazy.settings')->get();
    $status = [];

    if ($filters = $this->isFiltersEnabled()) {
      $status = array_merge($status, $filters);
    }

    if ($fields = $this->isFieldsEnabled($config['image_fields'])) {
      $status = array_merge($status, $fields);
    }

    $config['status'] = $status;

    return count($status) ? $config : FALSE;
  }

  /**
   * {@inheritdoc}
   */
  public function isFieldsEnabled(array $image_fields) {
    $status = [];

    $image_fields = is_array($image_fields) ? $image_fields : [];

    foreach ($image_fields as $tag => $option) {
      if ($image_fields[$tag]) {
        $status[$tag] = (bool) $option;
      }
    }

    return count($status) ? $status : FALSE;
  }

  /**
   * {@inheritdoc}
   */
  public function isFiltersEnabled() {
    $status = [];

    foreach (filter_formats() as $key => $filter) {
      if (
        $filter->status()
        && isset($filter->getDependencies()['module'])
        && in_array('lazy', $filter->getDependencies()['module'], TRUE)
      ) {
        $status[$filter->id()] = TRUE;
      }
    }

    return count($status) ? $status : FALSE;
  }

  /**
   * {@inheritdoc}
   */
  public function isPathAllowed($disabled_paths): bool {
    $current_path = $this->pathCurrent->getPath();
    $current_path_matcher = $this->pathMatcher->matchPath($current_path, $disabled_paths);
    $path_alias = $this->pathAliasManager->getAliasByPath($current_path);
    $path_alias_matcher = $this->pathMatcher->matchPath($path_alias, $disabled_paths);

    return !($current_path_matcher || $path_alias_matcher);
  }

}
