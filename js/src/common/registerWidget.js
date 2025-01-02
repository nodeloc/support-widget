/*
 * This file is part of nodeloc/support-widget.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */
import Widgets from 'flarum/extensions/afrux-forum-widgets-core/common/extend/Widgets';
import SupportWidget from './components/SupportWidget';

export default function (app) {
    new Widgets()
        .add({
            key: 'Support',
            component: SupportWidget,
            isDisabled: false,
            isUnique: true,
            placement: 'end',
            position: 1,
        })
        .extend(app, 'nodeloc-support-widget');
}
