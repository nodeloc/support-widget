/*
 * This file is part of nodeloc/support-widget
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */
import app from 'flarum/forum/app';
import Widget from 'flarum/extensions/afrux-forum-widgets-core/common/components/Widget';

export default class SupportWidget extends Widget {
    oncreate(vnode) {
        document.getElementById('supporthtml').innerHTML = app.forum.attribute('nodeloc-support-widget.customCode');
    }

    className() {
        return 'support-widget';
    }

    icon() {
        // Widget icon.
        return 'far fa-handshake';
    }

    title() {
      return app.translator.trans('nodeloc-support-widget.forum.widget.title');
    }
    content() {
      return (
        <div class="htmlwidget" id="supporthtml"></div>
      );}
}
