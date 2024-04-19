import{_ as n,o as s,c as e,a}from"./app-BjBjj4X_.js";const i={},t=a(`<h1 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json"><span>package.json</span></a></h1><p><code>https://docs.npmjs.com/cli/v10/configuring-npm/package-json</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Specifics of <span class="token function">npm</span><span class="token string">&#39;s package.json handling
Select CLI Version:

Description
This document is all you need to know about what&#39;</span>s required <span class="token keyword">in</span> your package.json file. It must be actual JSON, not just a JavaScript object literal.

A lot of the behavior described <span class="token keyword">in</span> this document is affected by the config settings described <span class="token keyword">in</span> config.

name
If you plan to publish your package, the <span class="token function">most</span> important things <span class="token keyword">in</span> your package.json are the name and version fields as they will be required. The name and version together form an identifier that is assumed to be completely unique. Changes to the package should come along with changes to the version. If you don<span class="token string">&#39;t plan to publish your package, the name and version fields are optional.

The name is what your thing is called.

Some rules:

The name must be less than or equal to 214 characters. This includes the scope for scoped packages.
The names of scoped packages can begin with a dot or an underscore. This is not permitted without a scope.
New packages must not have uppercase letters in the name.
The name ends up being part of a URL, an argument on the command line, and a folder name. Therefore, the name can&#39;</span>t contain any non-URL-safe characters.
Some tips:

Don<span class="token string">&#39;t use the same name as a core Node module.
Don&#39;</span>t put <span class="token string">&quot;js&quot;</span> or <span class="token string">&quot;node&quot;</span> <span class="token keyword">in</span> the name. It<span class="token string">&#39;s assumed that it&#39;</span>s js, since you<span class="token string">&#39;re writing a package.json file, and you can specify the engine using the &quot;engines&quot; field. (See below.)
The name will probably be passed as an argument to require(), so it should be something short, but also reasonably descriptive.
You may want to check the npm registry to see if there&#39;</span>s something by that name already, before you get too attached to it. <span class="token operator">&lt;</span>https://www.npmjs.com/<span class="token operator">&gt;</span>
A name can be optionally prefixed by a scope, e.g. @myorg/mypackage. See scope <span class="token keyword">for</span> <span class="token function">more</span> detail.

version
If you plan to publish your package, the <span class="token function">most</span> important things <span class="token keyword">in</span> your package.json are the name and version fields as they will be required. The name and version together form an identifier that is assumed to be completely unique. Changes to the package should come along with changes to the version. If you don<span class="token string">&#39;t plan to publish your package, the name and version fields are optional.

Version must be parseable by node-semver, which is bundled with npm as a dependency. (npm install semver to use it yourself.)

description
Put a description in it. It&#39;</span>s a string. This helps people discover your package, as it<span class="token string">&#39;s listed in npm search.

keywords
Put keywords in it. It&#39;</span>s an array of strings. This helps people discover your package as it<span class="token string">&#39;s listed in npm search.

homepage
The url to the project homepage.

Example:

&quot;homepage&quot;: &quot;&lt;https://github.com/owner/project#readme&gt;&quot;
bugs
The url to your project&#39;</span>s issue tracker and / or the email address to <span class="token function">which</span> issues should be reported. These are helpful <span class="token keyword">for</span> people <span class="token function">who</span> encounter issues with your package.

It should <span class="token function">look</span> like this:

<span class="token punctuation">{</span>
  <span class="token string">&quot;bugs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;url&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&lt;https://github.com/owner/project/issues&gt;&quot;</span>,
    <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&lt;project@hostname.com&gt;&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
You can specify either one or both values. If you want to provide only a url, you can specify the value <span class="token keyword">for</span> <span class="token string">&quot;bugs&quot;</span> as a simple string instead of an object.

If a url is provided, it will be used by the <span class="token function">npm</span> bugs command.

license
You should specify a license <span class="token keyword">for</span> your package so that people know how they are permitted to use it, and any restrictions you<span class="token string">&#39;re placing on it.

If you&#39;</span>re using a common license such as BSD-2-Clause or MIT, <span class="token function">add</span> a current SPDX license identifier <span class="token keyword">for</span> the license you<span class="token string">&#39;re using, like this:

{
  &quot;license&quot;: &quot;BSD-3-Clause&quot;
}
You can check the full list of SPDX license IDs. Ideally you should pick one that is OSI approved.

If your package is licensed under multiple common licenses, use an SPDX license expression syntax version 2.0 string, like this:

{
  &quot;license&quot;: &quot;(ISC OR GPL-3.0)&quot;
}
If you are using a license that hasn&#39;</span>t been assigned an SPDX identifier, or <span class="token keyword">if</span> you are using a custom license, use a string value like this one:

<span class="token punctuation">{</span>
  <span class="token string">&quot;license&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;SEE LICENSE IN <span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span><span class="token variable">\`</span></span>&quot;</span>
<span class="token punctuation">}</span>
Then include a <span class="token function">file</span> named <span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span><span class="token variable">\`</span></span> at the <span class="token function">top</span> level of the package.

Some old packages used license objects or a <span class="token string">&quot;licenses&quot;</span> property containing an array of license objects:

// Not valid metadata
<span class="token punctuation">{</span>
  <span class="token string">&quot;license&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;type&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;ISC&quot;</span>,
    <span class="token string">&quot;url&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;&lt;https://opensource.org/licenses/ISC&gt;&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

// Not valid metadata
<span class="token punctuation">{</span>
  <span class="token string">&quot;licenses&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;MIT&quot;</span>,
      <span class="token string">&quot;url&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;https://www.opensource.org/licenses/mit-license.php&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token punctuation">{</span>
      <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Apache-2.0&quot;</span>,
      <span class="token string">&quot;url&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;https://opensource.org/licenses/apache2.0.php&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
Those styles are now deprecated. Instead, use SPDX expressions, like this:

<span class="token punctuation">{</span>
  <span class="token string">&quot;license&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ISC&quot;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;license&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;(MIT OR Apache-2.0)&quot;</span>
<span class="token punctuation">}</span>
Finally, <span class="token keyword">if</span> you <span class="token keyword">do</span> not wish to grant others the right to use a private or unpublished package under any terms:

<span class="token punctuation">{</span>
  <span class="token string">&quot;license&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;UNLICENSED&quot;</span>
<span class="token punctuation">}</span>
Consider also setting <span class="token string">&quot;private&quot;</span><span class="token builtin class-name">:</span> <span class="token boolean">true</span> to prevent accidental publication.

people fields: author, contributors
The <span class="token string">&quot;author&quot;</span> is one person. <span class="token string">&quot;contributors&quot;</span> is an array of people. A <span class="token string">&quot;person&quot;</span> is an object with a <span class="token string">&quot;name&quot;</span> field and optionally <span class="token string">&quot;url&quot;</span> and <span class="token string">&quot;email&quot;</span>, like this:

<span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Barney Rubble&quot;</span>,
  <span class="token string">&quot;email&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&lt;b@rubble.com&gt;&quot;</span>,
  <span class="token string">&quot;url&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&lt;http://barnyrubble.tumblr.com/&gt;&quot;</span>
<span class="token punctuation">}</span>
Or you can shorten that all into a single string, and <span class="token function">npm</span> will parse it <span class="token keyword">for</span> you:

<span class="token punctuation">{</span>
  <span class="token string">&quot;author&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Barney Rubble &lt;b@rubble.com&gt; (&lt;http://barnyrubble.tumblr.com/&gt;)&quot;</span>
<span class="token punctuation">}</span>
Both email and url are optional either way.

<span class="token function">npm</span> also sets a top-level <span class="token string">&quot;maintainers&quot;</span> field with your <span class="token function">npm</span> user info.

funding
You can specify an object containing a URL that provides up-to-date information about ways to <span class="token builtin class-name">help</span> fund development of your package, or a string URL, or an array of these:

<span class="token punctuation">{</span>
  <span class="token string">&quot;funding&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;individual&quot;</span>,
    <span class="token string">&quot;url&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&lt;http://example.com/donate&gt;&quot;</span>
  <span class="token punctuation">}</span>,

  <span class="token string">&quot;funding&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;patreon&quot;</span>,
    <span class="token string">&quot;url&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&lt;https://www.patreon.com/my-account&gt;&quot;</span>
  <span class="token punctuation">}</span>,

  <span class="token string">&quot;funding&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&lt;http://example.com/donate&gt;&quot;</span>,

  <span class="token string">&quot;funding&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;individual&quot;</span>,
      <span class="token string">&quot;url&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http://example.com/donate&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;http://example.com/donateAlso&quot;</span>,
    <span class="token punctuation">{</span>
      <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;patreon&quot;</span>,
      <span class="token string">&quot;url&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;https://www.patreon.com/my-account&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
Users can use the <span class="token function">npm</span> fund subcommand to list the funding URLs of all dependencies of their project, direct and indirect. A shortcut to visit each funding url is also available when providing the project name such as: <span class="token function">npm</span> fund <span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>projectname<span class="token operator">&gt;</span><span class="token variable">\`</span></span> <span class="token punctuation">(</span>when there are multiple URLs, the first one will be visited<span class="token punctuation">)</span>

files
The optional files field is an array of <span class="token function">file</span> patterns that describes the entries to be included when your package is installed as a dependency. File patterns follow a similar syntax to .gitignore, but reversed: including a file, directory, or glob pattern <span class="token punctuation">(</span>*, **/*, and such<span class="token punctuation">)</span> will <span class="token function">make</span> it so that <span class="token function">file</span> is included <span class="token keyword">in</span> the tarball when it<span class="token string">&#39;s packed. Omitting the field will make it default to [&quot;*&quot;], which means it will include all files.

Some special files and directories are also included or excluded regardless of whether they exist in the files array (see below).

You can also provide a .npmignore file in the root of your package or in subdirectories, which will keep files from being included. At the root of your package it will not override the &quot;files&quot; field, but in subdirectories it will. The .npmignore file works just like a .gitignore. If there is a .gitignore file, and .npmignore is missing, .gitignore&#39;</span>s contents will be used instead.

Certain files are always included, regardless of settings:

package.json
README
LICENSE / LICENCE
The <span class="token function">file</span> <span class="token keyword">in</span> the <span class="token string">&quot;main&quot;</span> field
The file<span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">in</span> the <span class="token string">&quot;bin&quot;</span> field
README <span class="token operator">&amp;</span> LICENSE can have any <span class="token keyword">case</span> and extension.

Some files are always ignored by default:

*.orig
.*.swp
.DS_Store
._*
.git
.hg
.lock-wscript
.npmrc
.svn
.wafpickle-N
CVS
config.gypi
node_modules
npm-debug.log
package-lock.json <span class="token punctuation">(</span>use npm-shrinkwrap.json <span class="token keyword">if</span> you wish it to be published<span class="token punctuation">)</span>
pnpm-lock.yaml
yarn.lock
Most of these ignored files can be included specifically <span class="token keyword">if</span> included <span class="token keyword">in</span> the files globs. Exceptions to this are:

.git
.npmrc
node_modules
package-lock.json
pnpm-lock.yaml
yarn.lock
These can not be included.

main
The main field is a module ID that is the primary entry point to your program. That is, <span class="token keyword">if</span> your package is named foo, and a user installs it, and <span class="token keyword">then</span> does require<span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span>, <span class="token keyword">then</span> your main module<span class="token string">&#39;s exports object will be returned.

This should be a module relative to the root of your package folder.

For most modules, it makes the most sense to have a main script and often not much else.

If main is not set, it defaults to index.js in the package&#39;</span>s root folder.

browser
If your module is meant to be used client-side the browser field should be used instead of the main field. This is helpful to hint <span class="token function">users</span> that it might rely on primitives that aren<span class="token string">&#39;t available in Node.js modules. (e.g. window)

bin
A lot of packages have one or more executable files that they&#39;</span>d like to <span class="token function">install</span> into the <span class="token environment constant">PATH</span><span class="token builtin class-name">.</span> <span class="token function">npm</span> makes this pretty easy <span class="token punctuation">(</span>in fact, it uses this feature to <span class="token function">install</span> the <span class="token string">&quot;npm&quot;</span> executable.<span class="token punctuation">)</span>

To use this, supply a bin field <span class="token keyword">in</span> your package.json <span class="token function">which</span> is a map of <span class="token builtin class-name">command</span> name to <span class="token builtin class-name">local</span> <span class="token function">file</span> name. When this package is installed globally, that <span class="token function">file</span> will be either linked inside the global bins directory or a cmd <span class="token punctuation">(</span>Windows Command File<span class="token punctuation">)</span> will be created <span class="token function">which</span> executes the specified <span class="token function">file</span> <span class="token keyword">in</span> the bin field, so it is available to run by name or name.cmd <span class="token punctuation">(</span>on Windows PowerShell<span class="token punctuation">)</span>. When this package is installed as a dependency <span class="token keyword">in</span> another package, the <span class="token function">file</span> will be linked where it will be available to that package either directly by <span class="token function">npm</span> <span class="token builtin class-name">exec</span> or by name <span class="token keyword">in</span> other scripts when invoking them via <span class="token function">npm</span> run-script.

For example, myapp could have this:

<span class="token punctuation">{</span>
  <span class="token string">&quot;bin&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;myapp&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;./cli.js&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
So, when you <span class="token function">install</span> myapp, <span class="token keyword">in</span> <span class="token keyword">case</span> of unix-like OS it<span class="token string">&#39;ll create a symlink from the cli.js script to /usr/local/bin/myapp and in case of windows it will create a cmd file usually at C:\\Users\\{Username}\\AppData\\Roaming\\npm\\myapp.cmd which runs the cli.js script.

If you have a single executable, and its name should be the name of the package, then you can just supply it as a string. For example:

{
  &quot;name&quot;: &quot;my-program&quot;,
  &quot;version&quot;: &quot;1.2.5&quot;,
  &quot;bin&quot;: &quot;./path/to/program&quot;
}
would be the same as this:

{
  &quot;name&quot;: &quot;my-program&quot;,
  &quot;version&quot;: &quot;1.2.5&quot;,
  &quot;bin&quot;: {
    &quot;my-program&quot;: &quot;./path/to/program&quot;
  }
}
Please make sure that your file(s) referenced in bin starts with #!/usr/bin/env node, otherwise the scripts are started without the node executable!

Note that you can also set the executable files using directories.bin.

See folders for more info on executables.

man
Specify either a single file or an array of filenames to put in place for the man program to find.

If only a single file is provided, then it&#39;</span>s installed such that it is the result from <span class="token function">man</span> <span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>pkgname<span class="token operator">&gt;</span><span class="token variable">\`</span></span>, regardless of its actual filename. For example:

<span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;foo&quot;</span>,
  <span class="token string">&quot;version&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1.2.3&quot;</span>,
  <span class="token string">&quot;description&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;A packaged foo fooer for fooing foos&quot;</span>,
  <span class="token string">&quot;main&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;foo.js&quot;</span>,
  <span class="token string">&quot;man&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;./man/doc.1&quot;</span>
<span class="token punctuation">}</span>
would <span class="token function">link</span> the ./man/doc.1 <span class="token function">file</span> <span class="token keyword">in</span> such that it is the target <span class="token keyword">for</span> <span class="token function">man</span> foo

If the filename doesn<span class="token string">&#39;t start with the package name, then it&#39;</span>s prefixed. So, this:

<span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;foo&quot;</span>,
  <span class="token string">&quot;version&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1.2.3&quot;</span>,
  <span class="token string">&quot;description&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;A packaged foo fooer for fooing foos&quot;</span>,
  <span class="token string">&quot;main&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;foo.js&quot;</span>,
  <span class="token string">&quot;man&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./man/foo.1&quot;</span>, <span class="token string">&quot;./man/bar.1&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
will create files to <span class="token keyword">do</span> <span class="token function">man</span> foo and <span class="token function">man</span> foo-bar.

Man files must end with a number, and optionally a .gz suffix <span class="token keyword">if</span> they are compressed. The number dictates <span class="token function">which</span> <span class="token function">man</span> section the <span class="token function">file</span> is installed into.

<span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;foo&quot;</span>,
  <span class="token string">&quot;version&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1.2.3&quot;</span>,
  <span class="token string">&quot;description&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;A packaged foo fooer for fooing foos&quot;</span>,
  <span class="token string">&quot;main&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;foo.js&quot;</span>,
  <span class="token string">&quot;man&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./man/foo.1&quot;</span>, <span class="token string">&quot;./man/foo.2&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
will create entries <span class="token keyword">for</span> <span class="token function">man</span> foo and <span class="token function">man</span> <span class="token number">2</span> foo

directories
The CommonJS Packages spec details a few ways that you can indicate the structure of your package using a directories object. If you <span class="token function">look</span> at <span class="token function">npm</span><span class="token string">&#39;s package.json, you&#39;</span>ll see that it has directories <span class="token keyword">for</span> doc, lib, and man.

In the future, this information may be used <span class="token keyword">in</span> other creative ways.

directories.bin
If you specify a bin directory <span class="token keyword">in</span> directories.bin, all the files <span class="token keyword">in</span> that folder will be added.

Because of the way the bin directive works, specifying both a bin path and setting directories.bin is an error. If you want to specify individual files, use bin, and <span class="token keyword">for</span> all the files <span class="token keyword">in</span> an existing bin directory, use directories.bin.

directories.man
A folder that is full of <span class="token function">man</span> pages. Sugar to generate a <span class="token string">&quot;man&quot;</span> array by walking the folder.

repository
Specify the place where your code lives. This is helpful <span class="token keyword">for</span> people <span class="token function">who</span> want to contribute. If the <span class="token function">git</span> repo is on GitHub, <span class="token keyword">then</span> the <span class="token function">npm</span> docs <span class="token builtin class-name">command</span> will be able to <span class="token function">find</span> you.

Do it like this:

<span class="token punctuation">{</span>
  <span class="token string">&quot;repository&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;git&quot;</span>,
    <span class="token string">&quot;url&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&lt;https://github.com/npm/cli.git&gt;&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
The URL should be a publicly available <span class="token punctuation">(</span>perhaps read-only<span class="token punctuation">)</span> url that can be handed directly to a VCS program without any modification. It should not be a url to an html project page that you put <span class="token keyword">in</span> your browser. It<span class="token string">&#39;s for computers.

For GitHub, GitHub gist, Bitbucket, or GitLab repositories you can use the same shortcut syntax you use for npm install:

{
  &quot;repository&quot;: &quot;npm/npm&quot;,

  &quot;repository&quot;: &quot;github:user/repo&quot;,

  &quot;repository&quot;: &quot;gist:11081aaa281&quot;,

  &quot;repository&quot;: &quot;bitbucket:user/repo&quot;,

  &quot;repository&quot;: &quot;gitlab:user/repo&quot;
}
If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives:

{
  &quot;repository&quot;: {
    &quot;type&quot;: &quot;git&quot;,
    &quot;url&quot;: &quot;&lt;https://github.com/facebook/react.git&gt;&quot;,
    &quot;directory&quot;: &quot;packages/react-dom&quot;
  }
}
scripts
The &quot;scripts&quot; property is a dictionary containing script commands that are run at various times in the lifecycle of your package. The key is the lifecycle event, and the value is the command to run at that point.

See scripts to find out more about writing package scripts.

config
A &quot;config&quot; object can be used to set configuration parameters used in package scripts that persist across upgrades. For instance, if a package had the following:

{
  &quot;name&quot;: &quot;foo&quot;,
  &quot;config&quot;: {
    &quot;port&quot;: &quot;8080&quot;
  }
}
It could also have a &quot;start&quot; command that referenced the npm_package_config_port environment variable.

dependencies
Dependencies are specified in a simple object that maps a package name to a version range. The version range is a string which has one or more space-separated descriptors. Dependencies can also be identified with a tarball or git URL.

Please do not put test harnesses or transpilers or other &quot;development&quot; time tools in your dependencies object. See devDependencies, below.

See semver for more details about specifying version ranges.

version Must match version exactly
&gt;version Must be greater than version
&gt;=version etc
&lt;version
&lt;=version
~version &quot;Approximately equivalent to version&quot; See semver
^version &quot;Compatible with version&quot; See semver
1.2.x 1.2.0, 1.2.1, etc., but not 1.3.0
http://... See &#39;</span>URLs as Dependencies<span class="token string">&#39; below

* Matches any version
&quot;&quot; (just an empty string) Same as *
version1 - version2 Same as &gt;=version1 &lt;=version2.
range1 || range2 Passes if either range1 or range2 are satisfied.
git... See &#39;</span>Git URLs as Dependencies<span class="token string">&#39; below
user/repo See &#39;</span>GitHub URLs<span class="token string">&#39; below
tag A specific version tagged and published as tag See npm dist-tag
path/path/path See Local Paths below
For example, these are all valid:

{
  &quot;dependencies&quot;: {
    &quot;foo&quot;: &quot;1.0.0 - 2.9999.9999&quot;,
    &quot;bar&quot;: &quot;&gt;=1.0.2 &lt;2.1.2&quot;,
    &quot;baz&quot;: &quot;&gt;1.0.2 &lt;=2.3.4&quot;,
    &quot;boo&quot;: &quot;2.0.1&quot;,
    &quot;qux&quot;: &quot;&lt;1.0.0 || &gt;=2.3.1 &lt;2.4.5 || &gt;=2.5.2 &lt;3.0.0&quot;,
    &quot;asd&quot;: &quot;&lt;http://asdf.com/asdf.tar.gz&gt;&quot;,
    &quot;til&quot;: &quot;~1.2&quot;,
    &quot;elf&quot;: &quot;~1.2.3&quot;,
    &quot;two&quot;: &quot;2.x&quot;,
    &quot;thr&quot;: &quot;3.3.x&quot;,
    &quot;lat&quot;: &quot;latest&quot;,
    &quot;dyl&quot;: &quot;file:../dyl&quot;
  }
}
URLs as Dependencies
You may specify a tarball URL in place of a version range.

This tarball will be downloaded and installed locally to your package at install time.

Git URLs as Dependencies
Git urls are of the form:

\`\`\`shell
\`&lt;protocol&gt;\`://[\`&lt;user&gt;\`[:\`&lt;password&gt;\`]@]\`&lt;hostname&gt;\`[:\`&lt;port&gt;\`][:][/]\`&lt;path&gt;\`[#&lt;commit-ish&gt; | #semver:&lt;semver&gt;]
&lt;protocol&gt; is one of git, git+ssh, git+http, git+https, or git+file.

If #&lt;commit-ish&gt; is provided, it will be used to clone exactly that commit. If the commit-ish has the format #semver:\`&lt;semver&gt;\`, &lt;semver&gt; can be any valid semver range or exact version, and npm will look for any tags or refs matching that range in the remote repository, much as it would for a registry dependency. If neither #&lt;commit-ish&gt; or #semver:&lt;semver&gt; is specified, then the default branch is used.

Examples:

git+ssh://git@github.com:npm/cli.git#v1.0.27
git+ssh://git@github.com:npm/cli#semver:^5.0
git+&lt;https://isaacs@github.com/npm/cli.git&gt;
git://github.com/npm/cli.git#v1.0.27
When installing from a git repository, the presence of certain fields in the package.json will cause npm to believe it needs to perform a build. To do so your repository will be cloned into a temporary directory, all of its deps installed, relevant scripts run, and the resulting directory packed and installed.

This flow will occur if your git dependency uses workspaces, or if any of the following scripts are present:

build
prepare
prepack
preinstall
install
postinstall
If your git repository includes pre-built artifacts, you will likely want to make sure that none of the above scripts are defined, or your dependency will be rebuilt for every installation.

GitHub URLs
As of version 1.1.65, you can refer to GitHub urls as just &quot;foo&quot;: &quot;user/foo-project&quot;. Just as with git URLs, a commit-ish suffix can be included. For example:

{
  &quot;name&quot;: &quot;foo&quot;,
  &quot;version&quot;: &quot;0.0.0&quot;,
  &quot;dependencies&quot;: {
    &quot;express&quot;: &quot;expressjs/express&quot;,
    &quot;mocha&quot;: &quot;mochajs/mocha#4727d357ea&quot;,
    &quot;module&quot;: &quot;user/repo#feature/branch&quot;
  }
}
Local Paths
As of version 2.0.0 you can provide a path to a local directory that contains a package. Local paths can be saved using npm install -S or npm install --save, using any of these forms:

../foo/bar
~/foo/bar
./foo/bar
/foo/bar
in which case they will be normalized to a relative path and added to your package.json. For example:

{
  &quot;name&quot;: &quot;baz&quot;,
  &quot;dependencies&quot;: {
    &quot;bar&quot;: &quot;file:../foo/bar&quot;
  }
}
This feature is helpful for local offline development and creating tests that require npm installing where you don&#39;</span>t want to hit an external server, but should not be used when publishing your package to the public registry.

note: Packages linked by <span class="token builtin class-name">local</span> path will not have their own dependencies installed when <span class="token function">npm</span> <span class="token function">install</span> is ran <span class="token keyword">in</span> this case. You must run <span class="token function">npm</span> <span class="token function">install</span> from inside the <span class="token builtin class-name">local</span> path itself.

devDependencies
If someone is planning on downloading and using your module <span class="token keyword">in</span> their program, <span class="token keyword">then</span> they probably don<span class="token string">&#39;t want or need to download and build the external test or documentation framework that you use.

In this case, it&#39;</span>s best to map these additional items <span class="token keyword">in</span> a devDependencies object.

These things will be installed when doing <span class="token function">npm</span> <span class="token function">link</span> or <span class="token function">npm</span> <span class="token function">install</span> from the root of a package, and can be managed like any other <span class="token function">npm</span> configuration param. See config <span class="token keyword">for</span> <span class="token function">more</span> on the topic.

For build steps that are not platform-specific, such as compiling CoffeeScript or other languages to JavaScript, use the prepare script to <span class="token keyword">do</span> this, and <span class="token function">make</span> the required package a devDependency.

For example:

<span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ethopia-waza&quot;</span>,
  <span class="token string">&quot;description&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;a delightfully fruity coffee varietal&quot;</span>,
  <span class="token string">&quot;version&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1.2.3&quot;</span>,
  <span class="token string">&quot;devDependencies&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;coffee-script&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;~1.6.3&quot;</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;scripts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;prepare&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;coffee -o lib/ -c src/waza.coffee&quot;</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;main&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;lib/waza.js&quot;</span>
<span class="token punctuation">}</span>
The prepare script will be run before publishing, so that <span class="token function">users</span> can consume the functionality without requiring them to compile it themselves. In dev mode <span class="token punctuation">(</span>ie, locally running <span class="token function">npm</span> <span class="token function">install</span><span class="token punctuation">)</span>, it<span class="token string">&#39;ll run this script as well, so that you can test it easily.

peerDependencies
In some cases, you want to express the compatibility of your package with a host tool or library, while not necessarily doing a require of this host. This is usually referred to as a plugin. Notably, your module may be exposing a specific interface, expected and specified by the host documentation.

For example:

{
  &quot;name&quot;: &quot;tea-latte&quot;,
  &quot;version&quot;: &quot;1.3.5&quot;,
  &quot;peerDependencies&quot;: {
    &quot;tea&quot;: &quot;2.x&quot;
  }
}
This ensures your package tea-latte can be installed along with the second major version of the host package tea only. npm install tea-latte could possibly yield the following dependency graph:

├── tea-latte@1.3.5
└── tea@2.2.0
In npm versions 3 through 6, peerDependencies were not automatically installed, and would raise a warning if an invalid version of the peer dependency was found in the tree. As of npm v7, peerDependencies are installed by default.

Trying to install another plugin with a conflicting requirement may cause an error if the tree cannot be resolved correctly. For this reason, make sure your plugin requirement is as broad as possible, and not to lock it down to specific patch versions.

Assuming the host complies with semver, only changes in the host package&#39;</span>s major version will <span class="token builtin class-name">break</span> your plugin. Thus, <span class="token keyword">if</span> you<span class="token string">&#39;ve worked with every 1.x version of the host package, use &quot;^1.0&quot; or &quot;1.x&quot; to express this. If you depend on features introduced in 1.5.2, use &quot;^1.5.2&quot;.

peerDependenciesMeta
When a user installs your package, npm will emit warnings if packages specified in peerDependencies are not already installed. The peerDependenciesMeta field serves to provide npm more information on how your peer dependencies are to be used. Specifically, it allows peer dependencies to be marked as optional.

For example:

{
  &quot;name&quot;: &quot;tea-latte&quot;,
  &quot;version&quot;: &quot;1.3.5&quot;,
  &quot;peerDependencies&quot;: {
    &quot;tea&quot;: &quot;2.x&quot;,
    &quot;soy-milk&quot;: &quot;1.2&quot;
  },
  &quot;peerDependenciesMeta&quot;: {
    &quot;soy-milk&quot;: {
      &quot;optional&quot;: true
    }
  }
}
Marking a peer dependency as optional ensures npm will not emit a warning if the soy-milk package is not installed on the host. This allows you to integrate and interact with a variety of host packages without requiring all of them to be installed.

bundleDependencies
This defines an array of package names that will be bundled when publishing the package.

In cases where you need to preserve npm packages locally or have them available through a single file download, you can bundle the packages in a tarball file by specifying the package names in the bundleDependencies array and executing npm pack.

For example:

If we define a package.json like this:

{
  &quot;name&quot;: &quot;awesome-web-framework&quot;,
  &quot;version&quot;: &quot;1.0.0&quot;,
  &quot;bundleDependencies&quot;: [&quot;renderized&quot;, &quot;super-streams&quot;]
}
we can obtain awesome-web-framework-1.0.0.tgz file by running npm pack. This file contains the dependencies renderized and super-streams which can be installed in a new project by executing npm install awesome-web-framework-1.0.0.tgz. Note that the package names do not include any versions, as that information is specified in dependencies.

If this is spelled &quot;bundledDependencies&quot;, then that is also honored.

Alternatively, &quot;bundleDependencies&quot; can be defined as a boolean value. A value of true will bundle all dependencies, a value of false will bundle none.

optionalDependencies
If a dependency can be used, but you would like npm to proceed if it cannot be found or fails to install, then you may put it in the optionalDependencies object. This is a map of package name to version or url, just like the dependencies object. The difference is that build failures do not cause installation to fail. Running npm install --omit=optional will prevent these dependencies from being installed.

It is still your program&#39;</span>s responsibility to handle the lack of the dependency. For example, something like this:

try <span class="token punctuation">{</span>
  var foo <span class="token operator">=</span> require<span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  var fooVersion <span class="token operator">=</span> require<span class="token punctuation">(</span><span class="token string">&quot;foo/package.json&quot;</span><span class="token punctuation">)</span>.version<span class="token punctuation">;</span>
<span class="token punctuation">}</span> catch <span class="token punctuation">(</span>er<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  foo <span class="token operator">=</span> null<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>notGoodFooVersion<span class="token punctuation">(</span>fooVersion<span class="token punctuation">))</span> <span class="token punctuation">{</span>
  foo <span class="token operator">=</span> null<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

// <span class="token punctuation">..</span> <span class="token keyword">then</span> later <span class="token keyword">in</span> your program <span class="token punctuation">..</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  foo.doFooThings<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
Entries <span class="token keyword">in</span> optionalDependencies will override entries of the same name <span class="token keyword">in</span> dependencies, so it<span class="token string">&#39;s usually best to only put in one place.

overrides
If you need to make specific changes to dependencies of your dependencies, for example replacing the version of a dependency with a known security issue, replacing an existing dependency with a fork, or making sure that the same version of a package is used everywhere, then you may add an override.

Overrides provide a way to replace a package in your dependency tree with another version, or another package entirely. These changes can be scoped as specific or as vague as desired.

To make sure the package foo is always installed as version 1.0.0 no matter what version your dependencies rely on:

{
  &quot;overrides&quot;: {
    &quot;foo&quot;: &quot;1.0.0&quot;
  }
}
The above is a short hand notation, the full object form can be used to allow overriding a package itself as well as a child of the package. This will cause foo to always be 1.0.0 while also making bar at any depth beyond foo also 1.0.0:

{
  &quot;overrides&quot;: {
    &quot;foo&quot;: {
      &quot;.&quot;: &quot;1.0.0&quot;,
      &quot;bar&quot;: &quot;1.0.0&quot;
    }
  }
}
To only override foo to be 1.0.0 when it&#39;</span>s a child <span class="token punctuation">(</span>or grandchild, or great grandchild, etc<span class="token punctuation">)</span> of the package bar:

<span class="token punctuation">{</span>
  <span class="token string">&quot;overrides&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;bar&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;foo&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1.0.0&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
Keys can be nested to any arbitrary length. To override foo only when it<span class="token string">&#39;s a child of bar and only when bar is a child of baz:

{
  &quot;overrides&quot;: {
    &quot;baz&quot;: {
      &quot;bar&quot;: {
        &quot;foo&quot;: &quot;1.0.0&quot;
      }
    }
  }
}
The key of an override can also include a version, or range of versions. To override foo to 1.0.0, but only when it&#39;</span>s a child of bar@2.0.0:

<span class="token punctuation">{</span>
  <span class="token string">&quot;overrides&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;bar@2.0.0&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;foo&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1.0.0&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
You may not <span class="token builtin class-name">set</span> an override <span class="token keyword">for</span> a package that you directly depend on unless both the dependency and the override itself share the exact same spec. To <span class="token function">make</span> this limitation easier to deal with, overrides may also be defined as a reference to a spec <span class="token keyword">for</span> a direct dependency by prefixing the name of the package you wish the version to match with a $.

<span class="token punctuation">{</span>
  <span class="token string">&quot;dependencies&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;foo&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;^1.0.0&quot;</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;overrides&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    // BAD, will throw an EOVERRIDE error
    // <span class="token string">&quot;foo&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;^2.0.0&quot;</span>
    // GOOD, specs match so override is allowed
    // <span class="token string">&quot;foo&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;^1.0.0&quot;</span>
    // BEST, the override is defined as a reference to the dependency
    <span class="token string">&quot;foo&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;<span class="token variable">$foo</span>&quot;</span>,
    // the referenced package does not need to match the overridden one
    <span class="token string">&quot;bar&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;<span class="token variable">$foo</span>&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
engines
You can specify the version of <span class="token function">node</span> that your stuff works on:

<span class="token punctuation">{</span>
  <span class="token string">&quot;engines&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;node&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&gt;=0.10.3 &lt;15&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
And, like with dependencies, <span class="token keyword">if</span> you don<span class="token string">&#39;t specify the version (or if you specify &quot;*&quot; as the version), then any version of node will do.

You can also use the &quot;engines&quot; field to specify which versions of npm are capable of properly installing your program. For example:

{
  &quot;engines&quot;: {
    &quot;npm&quot;: &quot;~1.0.20&quot;
  }
}
Unless the user has set the engine-strict config flag, this field is advisory only and will only produce warnings when your package is installed as a dependency.

os
You can specify which operating systems your module will run on:

{
  &quot;os&quot;: [&quot;darwin&quot;, &quot;linux&quot;]
}
You can also block instead of allowing operating systems, just prepend the blocked os with a &#39;</span><span class="token operator">!</span><span class="token string">&#39;:

{
  &quot;os&quot;: [&quot;!win32&quot;]
}
The host operating system is determined by process.platform

It is allowed to both block and allow an item, although there isn&#39;</span>t any good reason to <span class="token keyword">do</span> this.

cpu
If your code only runs on certain cpu architectures, you can specify <span class="token function">which</span> ones.

<span class="token punctuation">{</span>
  <span class="token string">&quot;cpu&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;x64&quot;</span>, <span class="token string">&quot;ia32&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
Like the os option, you can also block architectures:

<span class="token punctuation">{</span>
  <span class="token string">&quot;cpu&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;!arm&quot;</span>, <span class="token string">&quot;!mips&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
The <span class="token function">host</span> architecture is determined by process.arch

private
If you <span class="token builtin class-name">set</span> <span class="token string">&quot;private&quot;</span><span class="token builtin class-name">:</span> <span class="token boolean">true</span> <span class="token keyword">in</span> your package.json, <span class="token keyword">then</span> <span class="token function">npm</span> will refuse to publish it.

This is a way to prevent accidental publication of private repositories. If you would like to ensure that a given package is only ever published to a specific registry <span class="token punctuation">(</span>for example, an internal registry<span class="token punctuation">)</span>, <span class="token keyword">then</span> use the publishConfig dictionary described below to override the registry config param at publish-time.

publishConfig
This is a <span class="token builtin class-name">set</span> of config values that will be used at publish-time. It&#39;s especially handy <span class="token keyword">if</span> you want to <span class="token builtin class-name">set</span> the tag, registry or access, so that you can ensure that a given package is not tagged with <span class="token string">&quot;latest&quot;</span>, published to the global public registry or that a scoped module is private by default.

See config to see the list of config options that can be overridden.

workspaces
The optional workspaces field is an array of <span class="token function">file</span> patterns that describes locations within the <span class="token builtin class-name">local</span> <span class="token function">file</span> system that the <span class="token function">install</span> client should <span class="token function">look</span> up to <span class="token function">find</span> each workspace that needs to be symlinked to the <span class="token function">top</span> level node_modules folder.

It can describe either the direct paths of the folders to be used as workspaces or it can define globs that will resolve to these same folders.

In the following example, all folders located inside the folder ./packages will be treated as workspaces as long as they have valid package.json files inside them:

<span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;workspace-example&quot;</span>,
  <span class="token string">&quot;workspaces&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./packages/*&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
See workspaces <span class="token keyword">for</span> <span class="token function">more</span> examples.

DEFAULT VALUES
<span class="token function">npm</span> will default some values based on package contents.

<span class="token string">&quot;scripts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;start&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;node server.js&quot;</span><span class="token punctuation">}</span>

If there is a server.js <span class="token function">file</span> <span class="token keyword">in</span> the root of your package, <span class="token keyword">then</span> <span class="token function">npm</span> will default the start <span class="token builtin class-name">command</span> to <span class="token function">node</span> server.js.

<span class="token string">&quot;scripts&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;install&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;node-gyp rebuild&quot;</span><span class="token punctuation">}</span>

If there is a binding.gyp <span class="token function">file</span> <span class="token keyword">in</span> the root of your package and you have not defined an <span class="token function">install</span> or preinstall script, <span class="token function">npm</span> will default the <span class="token function">install</span> <span class="token builtin class-name">command</span> to compile using node-gyp.

<span class="token string">&quot;contributors&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>

If there is an AUTHORS <span class="token function">file</span> <span class="token keyword">in</span> the root of your package, <span class="token function">npm</span> will treat each line as a Name <span class="token variable"><span class="token variable">\`</span><span class="token operator">&lt;</span>email<span class="token operator">&gt;</span><span class="token variable">\`</span></span> <span class="token punctuation">(</span>url<span class="token punctuation">)</span> format, where email and url are optional. Lines <span class="token function">which</span> start with a <span class="token comment"># or are blank, will be ignored.</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),l=[t];function o(c,u){return s(),e("div",null,l)}const r=n(i,[["render",o],["__file","package.html.vue"]]),p=JSON.parse('{"path":"/font-end/npm/package.html","title":"package.json","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1713431046000,"contributors":[{"name":"OldWitch","email":"demilich1990@gmail.com","commits":1}]},"filePathRelative":"font-end/npm/package.md"}');export{r as comp,p as data};
