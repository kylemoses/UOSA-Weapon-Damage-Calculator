root = true

#defaults
[*]
max_line_length = off
end_of_line = lf
indent_size = 2
indent_style = space
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

#front end overrides
[*.html]
indent_size = unset
indent_style = tab
tab_width = 4

[*.{js,json,vue,ejs}]
indent_size = unset
indent_style = tab
tab_width = 4

[*.{css,styl,scss,less,sass}]
indent_size = unset
indent_style = tab
tab_width = 4
