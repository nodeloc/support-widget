/*
 * This file is part of nodeloc/support-widget.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/forum/app';
import registerWidget from '../common/registerWidget';

app.initializers.add('nodeloc/support-widget', () => {
    registerWidget(app);
});
