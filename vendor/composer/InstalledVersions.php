<?php











namespace Composer;

use Composer\Autoload\ClassLoader;
use Composer\Semver\VersionParser;






class InstalledVersions
{
private static $installed = array (
  'root' => 
  array (
    'pretty_version' => 'dev-master',
    'version' => 'dev-master',
    'aliases' => 
    array (
    ),
    'reference' => 'd52a759f555a036e6cd4f05f791e2b5f22223f6a',
    'name' => 'vikfand/sharizard-wordpress',
  ),
  'versions' => 
  array (
    'danielstjules/stringy' => 
    array (
      'replaced' => 
      array (
        0 => '~3.0',
      ),
    ),
    'defuse/php-encryption' => 
    array (
      'pretty_version' => 'v2.3.1',
      'version' => '2.3.1.0',
      'aliases' => 
      array (
      ),
      'reference' => '77880488b9954b7884c25555c2a0ea9e7053f9d2',
    ),
    'paragonie/random_compat' => 
    array (
      'pretty_version' => 'v9.99.100',
      'version' => '9.99.100.0',
      'aliases' => 
      array (
      ),
      'reference' => '996434e5492cb4c3edcb9168db6fbb1359ef965a',
    ),
    'phpdocumentor/reflection-common' => 
    array (
      'pretty_version' => '2.2.0',
      'version' => '2.2.0.0',
      'aliases' => 
      array (
      ),
      'reference' => '1d01c49d4ed62f25aa84a747ad35d5a16924662b',
    ),
    'phpdocumentor/reflection-docblock' => 
    array (
      'pretty_version' => '5.3.0',
      'version' => '5.3.0.0',
      'aliases' => 
      array (
      ),
      'reference' => '622548b623e81ca6d78b721c5e029f4ce664f170',
    ),
    'phpdocumentor/type-resolver' => 
    array (
      'pretty_version' => '1.6.0',
      'version' => '1.6.0.0',
      'aliases' => 
      array (
      ),
      'reference' => '93ebd0014cab80c4ea9f5e297ea48672f1b87706',
    ),
    'symfony/polyfill' => 
    array (
      'pretty_version' => 'v1.25.0',
      'version' => '1.25.0.0',
      'aliases' => 
      array (
      ),
      'reference' => '31c7c7fc6077e9ac3e31a8cee5fbee2a0bb08173',
    ),
    'symfony/polyfill-apcu' => 
    array (
      'replaced' => 
      array (
        0 => 'v1.25.0',
      ),
    ),
    'symfony/polyfill-ctype' => 
    array (
      'replaced' => 
      array (
        0 => 'v1.25.0',
      ),
    ),
    'symfony/polyfill-iconv' => 
    array (
      'replaced' => 
      array (
        0 => 'v1.25.0',
      ),
    ),
    'symfony/polyfill-intl-grapheme' => 
    array (
      'replaced' => 
      array (
        0 => 'v1.25.0',
      ),
    ),
    'symfony/polyfill-intl-icu' => 
    array (
      'replaced' => 
      array (
        0 => 'v1.25.0',
      ),
    ),
    'symfony/polyfill-intl-idn' => 
    array (
      'replaced' => 
      array (
        0 => 'v1.25.0',
      ),
    ),
    'symfony/polyfill-intl-messageformatter' => 
    array (
      'replaced' => 
      array (
        0 => 'v1.25.0',
      ),
    ),
    'symfony/polyfill-intl-normalizer' => 
    array (
      'replaced' => 
      array (
        0 => 'v1.25.0',
      ),
    ),
    'symfony/polyfill-mbstring' => 
    array (
      'replaced' => 
      array (
        0 => 'v1.25.0',
      ),
    ),
    'symfony/polyfill-php72' => 
    array (
      'replaced' => 
      array (
        0 => 'v1.25.0',
      ),
    ),
    'symfony/polyfill-php73' => 
    array (
      'replaced' => 
      array (
        0 => 'v1.25.0',
      ),
    ),
    'symfony/polyfill-php74' => 
    array (
      'replaced' => 
      array (
        0 => 'v1.25.0',
      ),
    ),
    'symfony/polyfill-php80' => 
    array (
      'replaced' => 
      array (
        0 => 'v1.25.0',
      ),
    ),
    'symfony/polyfill-php81' => 
    array (
      'replaced' => 
      array (
        0 => 'v1.25.0',
      ),
    ),
    'symfony/polyfill-util' => 
    array (
      'replaced' => 
      array (
        0 => 'v1.25.0',
      ),
    ),
    'symfony/polyfill-uuid' => 
    array (
      'replaced' => 
      array (
        0 => 'v1.25.0',
      ),
    ),
    'symfony/polyfill-xml' => 
    array (
      'replaced' => 
      array (
        0 => 'v1.25.0',
      ),
    ),
    'tgmpa/tgm-plugin-activation' => 
    array (
      'pretty_version' => 'dev-develop',
      'version' => 'dev-develop',
      'aliases' => 
      array (
        0 => '9999999-dev',
      ),
      'reference' => '2d34264f4fdcfcc60261d490ff2e689f0c33730c',
    ),
    'vikfand/sharizard-wordpress' => 
    array (
      'pretty_version' => 'dev-master',
      'version' => 'dev-master',
      'aliases' => 
      array (
      ),
      'reference' => 'd52a759f555a036e6cd4f05f791e2b5f22223f6a',
    ),
    'voku/anti-xss' => 
    array (
      'pretty_version' => '4.1.37',
      'version' => '4.1.37.0',
      'aliases' => 
      array (
      ),
      'reference' => '728e158427a263917f33b0a29eb75d866bd18d17',
    ),
    'voku/arrayy' => 
    array (
      'pretty_version' => '7.9.0',
      'version' => '7.9.0.0',
      'aliases' => 
      array (
      ),
      'reference' => '8c56970123b8c6d62d3583f0ba1eb6846b62d913',
    ),
    'voku/email-check' => 
    array (
      'pretty_version' => '3.1.0',
      'version' => '3.1.0.0',
      'aliases' => 
      array (
      ),
      'reference' => '6ea842920bbef6758b8c1e619fd1710e7a1a2cac',
    ),
    'voku/portable-ascii' => 
    array (
      'pretty_version' => '2.0.0',
      'version' => '2.0.0.0',
      'aliases' => 
      array (
      ),
      'reference' => '9bd89e83cecdf8c37b64909454249eaed98b2c89',
    ),
    'voku/portable-utf8' => 
    array (
      'pretty_version' => '6.0.3',
      'version' => '6.0.3.0',
      'aliases' => 
      array (
      ),
      'reference' => '82a714b5a4973974c1113e97b11c1044a8b8cb85',
    ),
    'voku/stop-words' => 
    array (
      'pretty_version' => '2.0.1',
      'version' => '2.0.1.0',
      'aliases' => 
      array (
      ),
      'reference' => '8e63c0af20f800b1600783764e0ce19e53969f71',
    ),
    'voku/stringy' => 
    array (
      'pretty_version' => '6.5.2',
      'version' => '6.5.2.0',
      'aliases' => 
      array (
      ),
      'reference' => '760438112f8696ba3d51a96896bc786d29a5f183',
    ),
    'voku/urlify' => 
    array (
      'pretty_version' => '5.0.7',
      'version' => '5.0.7.0',
      'aliases' => 
      array (
      ),
      'reference' => '014b2074407b5db5968f836c27d8731934b330e4',
    ),
    'webmozart/assert' => 
    array (
      'pretty_version' => '1.10.0',
      'version' => '1.10.0.0',
      'aliases' => 
      array (
      ),
      'reference' => '6964c76c7804814a842473e0c8fd15bab0f18e25',
    ),
  ),
);
private static $canGetVendors;
private static $installedByVendor = array();







public static function getInstalledPackages()
{
$packages = array();
foreach (self::getInstalled() as $installed) {
$packages[] = array_keys($installed['versions']);
}


if (1 === \count($packages)) {
return $packages[0];
}

return array_keys(array_flip(\call_user_func_array('array_merge', $packages)));
}









public static function isInstalled($packageName)
{
foreach (self::getInstalled() as $installed) {
if (isset($installed['versions'][$packageName])) {
return true;
}
}

return false;
}














public static function satisfies(VersionParser $parser, $packageName, $constraint)
{
$constraint = $parser->parseConstraints($constraint);
$provided = $parser->parseConstraints(self::getVersionRanges($packageName));

return $provided->matches($constraint);
}










public static function getVersionRanges($packageName)
{
foreach (self::getInstalled() as $installed) {
if (!isset($installed['versions'][$packageName])) {
continue;
}

$ranges = array();
if (isset($installed['versions'][$packageName]['pretty_version'])) {
$ranges[] = $installed['versions'][$packageName]['pretty_version'];
}
if (array_key_exists('aliases', $installed['versions'][$packageName])) {
$ranges = array_merge($ranges, $installed['versions'][$packageName]['aliases']);
}
if (array_key_exists('replaced', $installed['versions'][$packageName])) {
$ranges = array_merge($ranges, $installed['versions'][$packageName]['replaced']);
}
if (array_key_exists('provided', $installed['versions'][$packageName])) {
$ranges = array_merge($ranges, $installed['versions'][$packageName]['provided']);
}

return implode(' || ', $ranges);
}

throw new \OutOfBoundsException('Package "' . $packageName . '" is not installed');
}





public static function getVersion($packageName)
{
foreach (self::getInstalled() as $installed) {
if (!isset($installed['versions'][$packageName])) {
continue;
}

if (!isset($installed['versions'][$packageName]['version'])) {
return null;
}

return $installed['versions'][$packageName]['version'];
}

throw new \OutOfBoundsException('Package "' . $packageName . '" is not installed');
}





public static function getPrettyVersion($packageName)
{
foreach (self::getInstalled() as $installed) {
if (!isset($installed['versions'][$packageName])) {
continue;
}

if (!isset($installed['versions'][$packageName]['pretty_version'])) {
return null;
}

return $installed['versions'][$packageName]['pretty_version'];
}

throw new \OutOfBoundsException('Package "' . $packageName . '" is not installed');
}





public static function getReference($packageName)
{
foreach (self::getInstalled() as $installed) {
if (!isset($installed['versions'][$packageName])) {
continue;
}

if (!isset($installed['versions'][$packageName]['reference'])) {
return null;
}

return $installed['versions'][$packageName]['reference'];
}

throw new \OutOfBoundsException('Package "' . $packageName . '" is not installed');
}





public static function getRootPackage()
{
$installed = self::getInstalled();

return $installed[0]['root'];
}







public static function getRawData()
{
return self::$installed;
}



















public static function reload($data)
{
self::$installed = $data;
self::$installedByVendor = array();
}




private static function getInstalled()
{
if (null === self::$canGetVendors) {
self::$canGetVendors = method_exists('Composer\Autoload\ClassLoader', 'getRegisteredLoaders');
}

$installed = array();

if (self::$canGetVendors) {

foreach (ClassLoader::getRegisteredLoaders() as $vendorDir => $loader) {
if (isset(self::$installedByVendor[$vendorDir])) {
$installed[] = self::$installedByVendor[$vendorDir];
} elseif (is_file($vendorDir.'/composer/installed.php')) {
$installed[] = self::$installedByVendor[$vendorDir] = require $vendorDir.'/composer/installed.php';
}
}
}

$installed[] = self::$installed;

return $installed;
}
}
