export default {
  "grammars": {
    "kotlin": {
      "displayName": "Kotlin",
      "fileTypes": [
        "kt",
        "kts"
      ],
      "name": "kotlin",
      "patterns": [
        {
          "include": "#import"
        },
        {
          "include": "#package"
        },
        {
          "include": "#code"
        }
      ],
      "repository": {
        "annotation-simple": {
          "match": "(?<!\\w)@[\\w\\.]+\\b(?!:)",
          "name": "entity.name.type.annotation.kotlin"
        },
        "annotation-site": {
          "begin": "(?<!\\w)(@\\w+):\\s*(?!\\[)",
          "beginCaptures": {
            "1": {
              "name": "entity.name.type.annotation-site.kotlin"
            }
          },
          "end": "$",
          "patterns": [
            {
              "include": "#unescaped-annotation"
            }
          ]
        },
        "annotation-site-list": {
          "begin": "(?<!\\w)(@\\w+):\\s*\\[",
          "beginCaptures": {
            "1": {
              "name": "entity.name.type.annotation-site.kotlin"
            }
          },
          "end": "\\]",
          "patterns": [
            {
              "include": "#unescaped-annotation"
            }
          ]
        },
        "binary-literal": {
          "match": "0(b|B)[01][01_]*",
          "name": "constant.numeric.binary.kotlin"
        },
        "boolean-literal": {
          "match": "\\b(true|false)\\b",
          "name": "constant.language.boolean.kotlin"
        },
        "character": {
          "begin": "'",
          "end": "'",
          "name": "string.quoted.single.kotlin",
          "patterns": [
            {
              "match": "\\\\.",
              "name": "constant.character.escape.kotlin"
            }
          ]
        },
        "class-declaration": {
          "captures": {
            "1": {
              "name": "keyword.hard.class.kotlin"
            },
            "2": {
              "name": "entity.name.type.class.kotlin"
            },
            "3": {
              "patterns": [
                {
                  "include": "#type-parameter"
                }
              ]
            }
          },
          "match": "\\b(class|(?:fun\\s+)?interface)\\s+(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?"
        },
        "code": {
          "patterns": [
            {
              "include": "#comments"
            },
            {
              "include": "#keywords"
            },
            {
              "include": "#annotation-simple"
            },
            {
              "include": "#annotation-site-list"
            },
            {
              "include": "#annotation-site"
            },
            {
              "include": "#class-declaration"
            },
            {
              "include": "#object"
            },
            {
              "include": "#type-alias"
            },
            {
              "include": "#function"
            },
            {
              "include": "#variable-declaration"
            },
            {
              "include": "#type-constraint"
            },
            {
              "include": "#type-annotation"
            },
            {
              "include": "#function-call"
            },
            {
              "include": "#method-reference"
            },
            {
              "include": "#key"
            },
            {
              "include": "#string"
            },
            {
              "include": "#string-empty"
            },
            {
              "include": "#string-multiline"
            },
            {
              "include": "#character"
            },
            {
              "include": "#lambda-arrow"
            },
            {
              "include": "#operators"
            },
            {
              "include": "#self-reference"
            },
            {
              "include": "#decimal-literal"
            },
            {
              "include": "#hex-literal"
            },
            {
              "include": "#binary-literal"
            },
            {
              "include": "#boolean-literal"
            },
            {
              "include": "#null-literal"
            }
          ]
        },
        "comment-block": {
          "begin": "/\\*(?!\\*)",
          "end": "\\*/",
          "name": "comment.block.kotlin"
        },
        "comment-javadoc": {
          "patterns": [
            {
              "begin": "/\\*\\*",
              "end": "\\*/",
              "name": "comment.block.javadoc.kotlin",
              "patterns": [
                {
                  "match": "@(return|constructor|receiver|sample|see|author|since|suppress)\\b",
                  "name": "keyword.other.documentation.javadoc.kotlin"
                },
                {
                  "captures": {
                    "1": {
                      "name": "keyword.other.documentation.javadoc.kotlin"
                    },
                    "2": {
                      "name": "variable.parameter.kotlin"
                    }
                  },
                  "match": "(@param|@property)\\s+(\\S+)"
                },
                {
                  "captures": {
                    "1": {
                      "name": "keyword.other.documentation.javadoc.kotlin"
                    },
                    "2": {
                      "name": "variable.parameter.kotlin"
                    }
                  },
                  "match": "(@param)\\[(\\S+)\\]"
                },
                {
                  "captures": {
                    "1": {
                      "name": "keyword.other.documentation.javadoc.kotlin"
                    },
                    "2": {
                      "name": "entity.name.type.class.kotlin"
                    }
                  },
                  "match": "(@(?:exception|throws))\\s+(\\S+)"
                },
                {
                  "captures": {
                    "1": {
                      "name": "keyword.other.documentation.javadoc.kotlin"
                    },
                    "2": {
                      "name": "entity.name.type.class.kotlin"
                    },
                    "3": {
                      "name": "variable.parameter.kotlin"
                    }
                  },
                  "match": "{(@link)\\s+(\\S+)?#([\\w$]+\\s*\\([^()]*\\)).*}"
                }
              ]
            }
          ]
        },
        "comment-line": {
          "begin": "//",
          "end": "$",
          "name": "comment.line.double-slash.kotlin"
        },
        "comments": {
          "patterns": [
            {
              "include": "#comment-line"
            },
            {
              "include": "#comment-block"
            },
            {
              "include": "#comment-javadoc"
            }
          ]
        },
        "control-keywords": {
          "match": "\\b(if|else|while|do|when|try|throw|break|continue|return|for)\\b",
          "name": "keyword.control.kotlin"
        },
        "decimal-literal": {
          "match": "\\b\\d[\\d_]*(\\.[\\d_]+)?((e|E)\\d+)?(u|U)?(L|F|f)?\\b",
          "name": "constant.numeric.decimal.kotlin"
        },
        "function": {
          "captures": {
            "1": {
              "name": "keyword.hard.fun.kotlin"
            },
            "2": {
              "patterns": [
                {
                  "include": "#type-parameter"
                }
              ]
            },
            "4": {
              "name": "entity.name.type.class.extension.kotlin"
            },
            "5": {
              "name": "entity.name.function.declaration.kotlin"
            }
          },
          "match": "\\b(fun)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?:(?:(\\w+)\\.)?(\\b\\w+\\b|`[^`]+`))?"
        },
        "function-call": {
          "captures": {
            "1": {
              "name": "entity.name.function.call.kotlin"
            },
            "2": {
              "patterns": [
                {
                  "include": "#type-parameter"
                }
              ]
            }
          },
          "match": "\\??\\.?(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?\\s*(?=[({])"
        },
        "hard-keywords": {
          "match": "\\b(as|typeof|is|in)\\b",
          "name": "keyword.hard.kotlin"
        },
        "hex-literal": {
          "match": "0(x|X)[A-Fa-f0-9][A-Fa-f0-9_]*(u|U)?",
          "name": "constant.numeric.hex.kotlin"
        },
        "import": {
          "begin": "\\b(import)\\b\\s*",
          "beginCaptures": {
            "1": {
              "name": "keyword.soft.kotlin"
            }
          },
          "contentName": "entity.name.package.kotlin",
          "end": ";|$",
          "name": "meta.import.kotlin",
          "patterns": [
            {
              "include": "#comments"
            },
            {
              "include": "#hard-keywords"
            },
            {
              "match": "\\*",
              "name": "variable.language.wildcard.kotlin"
            }
          ]
        },
        "key": {
          "captures": {
            "1": {
              "name": "variable.parameter.kotlin"
            },
            "2": {
              "name": "keyword.operator.assignment.kotlin"
            }
          },
          "match": "\\b(\\w=)\\s*(=)"
        },
        "keywords": {
          "patterns": [
            {
              "include": "#prefix-modifiers"
            },
            {
              "include": "#postfix-modifiers"
            },
            {
              "include": "#soft-keywords"
            },
            {
              "include": "#hard-keywords"
            },
            {
              "include": "#control-keywords"
            }
          ]
        },
        "lambda-arrow": {
          "match": "->",
          "name": "storage.type.function.arrow.kotlin"
        },
        "method-reference": {
          "captures": {
            "1": {
              "name": "entity.name.function.reference.kotlin"
            }
          },
          "match": "\\??::(\\b\\w+\\b|`[^`]+`)"
        },
        "null-literal": {
          "match": "\\bnull\\b",
          "name": "constant.language.null.kotlin"
        },
        "object": {
          "captures": {
            "1": {
              "name": "keyword.hard.object.kotlin"
            },
            "2": {
              "name": "entity.name.type.object.kotlin"
            }
          },
          "match": "\\b(object)(?:\\s+(\\b\\w+\\b|`[^`]+`))?"
        },
        "operators": {
          "patterns": [
            {
              "match": "(===?|!==?|<=|>=|<|>)",
              "name": "keyword.operator.comparison.kotlin"
            },
            {
              "match": "([+*/%-]=)",
              "name": "keyword.operator.assignment.arithmetic.kotlin"
            },
            {
              "match": "(=)",
              "name": "keyword.operator.assignment.kotlin"
            },
            {
              "match": "([+*/%-])",
              "name": "keyword.operator.arithmetic.kotlin"
            },
            {
              "match": "(!|&&|\\|\\|)",
              "name": "keyword.operator.logical.kotlin"
            },
            {
              "match": "(--|\\+\\+)",
              "name": "keyword.operator.increment-decrement.kotlin"
            },
            {
              "match": "(\\.\\.)",
              "name": "keyword.operator.range.kotlin"
            }
          ]
        },
        "package": {
          "begin": "\\b(package)\\b\\s*",
          "beginCaptures": {
            "1": {
              "name": "keyword.hard.package.kotlin"
            }
          },
          "contentName": "entity.name.package.kotlin",
          "end": ";|$",
          "name": "meta.package.kotlin",
          "patterns": [
            {
              "include": "#comments"
            }
          ]
        },
        "postfix-modifiers": {
          "match": "\\b(where|by|get|set)\\b",
          "name": "storage.modifier.other.kotlin"
        },
        "prefix-modifiers": {
          "match": "\\b(abstract|final|enum|open|annotation|sealed|data|override|final|lateinit|private|protected|public|internal|inner|companion|noinline|crossinline|vararg|reified|tailrec|operator|infix|inline|external|const|suspend|value)\\b",
          "name": "storage.modifier.other.kotlin"
        },
        "self-reference": {
          "match": "\\b(this|super)(@\\w+)?\\b",
          "name": "variable.language.this.kotlin"
        },
        "soft-keywords": {
          "match": "\\b(init|catch|finally|field)\\b",
          "name": "keyword.soft.kotlin"
        },
        "string": {
          "begin": "(?<!\")\"(?!\")",
          "end": "\"",
          "name": "string.quoted.double.kotlin",
          "patterns": [
            {
              "match": "\\\\.",
              "name": "constant.character.escape.kotlin"
            },
            {
              "include": "#string-escape-simple"
            },
            {
              "include": "#string-escape-bracketed"
            }
          ]
        },
        "string-empty": {
          "match": "(?<!\")\"\"(?!\")",
          "name": "string.quoted.double.kotlin"
        },
        "string-escape-bracketed": {
          "begin": "(?<!\\\\)(\\$\\{)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.template-expression.begin"
            }
          },
          "end": "(\\})",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.template-expression.end"
            }
          },
          "name": "meta.template.expression.kotlin",
          "patterns": [
            {
              "include": "#code"
            }
          ]
        },
        "string-escape-simple": {
          "match": "(?<!\\\\)\\$\\w+\\b",
          "name": "variable.string-escape.kotlin"
        },
        "string-multiline": {
          "begin": "\"\"\"",
          "end": "\"\"\"",
          "name": "string.quoted.double.kotlin",
          "patterns": [
            {
              "match": "\\\\.",
              "name": "constant.character.escape.kotlin"
            },
            {
              "include": "#string-escape-simple"
            },
            {
              "include": "#string-escape-bracketed"
            }
          ]
        },
        "type-alias": {
          "captures": {
            "1": {
              "name": "keyword.hard.typealias.kotlin"
            },
            "2": {
              "name": "entity.name.type.kotlin"
            },
            "3": {
              "patterns": [
                {
                  "include": "#type-parameter"
                }
              ]
            }
          },
          "match": "\\b(typealias)\\s+(\\b\\w+\\b|`[^`]+`)\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?"
        },
        "type-annotation": {
          "captures": {
            "0": {
              "patterns": [
                {
                  "include": "#type-parameter"
                }
              ]
            }
          },
          "match": "(?<![:?]):\\s*(\\w|\\?|\\s|->|(?<GROUP>[<(]([^<>()\"']|\\g<GROUP>)+[)>]))+"
        },
        "type-parameter": {
          "patterns": [
            {
              "match": "\\b\\w+\\b",
              "name": "entity.name.type.kotlin"
            },
            {
              "match": "\\b(in|out)\\b",
              "name": "storage.modifier.kotlin"
            }
          ]
        },
        "unescaped-annotation": {
          "match": "\\b[\\w\\.]+\\b",
          "name": "entity.name.type.annotation.kotlin"
        },
        "variable-declaration": {
          "captures": {
            "1": {
              "name": "keyword.hard.kotlin"
            },
            "2": {
              "patterns": [
                {
                  "include": "#type-parameter"
                }
              ]
            }
          },
          "match": "\\b(val|var)\\b\\s*(?<GROUP><([^<>]|\\g<GROUP>)+>)?"
        }
      },
      "scopeName": "source.kotlin"
    },
    "go": {
      "displayName": "Go",
      "name": "go",
      "patterns": [
        {
          "include": "#statements"
        }
      ],
      "repository": {
        "after_control_variables": {
          "captures": {
            "1": {
              "patterns": [
                {
                  "include": "#type-declarations-without-brackets"
                },
                {
                  "match": "\\[",
                  "name": "punctuation.definition.begin.bracket.square.go"
                },
                {
                  "match": "\\]",
                  "name": "punctuation.definition.end.bracket.square.go"
                },
                {
                  "match": "(?:\\w+)",
                  "name": "variable.other.go"
                }
              ]
            }
          },
          "comment": "After control variables, to not highlight as a struct/interface (before formatting with gofmt)",
          "match": "(?:(?<=\\brange\\b|\\bswitch\\b|\\;|\\bif\\b|\\bfor\\b|<|>|<=|>=|==|!=|\\w(?:\\+|/|-|\\*|\\%)|\\w(?:\\+|/|-|\\*|\\%)=|\\|\\||\\&\\&)(?:\\s*)((?![\\[\\]]+)[0-9A-Za-z\\-_!\\.\\[\\]<>=\\*/+\\%:]+)(?:\\s*)(?=\\{))"
        },
        "brackets": {
          "patterns": [
            {
              "begin": "\\{",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.begin.bracket.curly.go"
                }
              },
              "end": "\\}",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.curly.go"
                }
              },
              "patterns": [
                {
                  "include": "$self"
                }
              ]
            },
            {
              "begin": "\\(",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.begin.bracket.round.go"
                }
              },
              "end": "\\)",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.round.go"
                }
              },
              "patterns": [
                {
                  "include": "$self"
                }
              ]
            },
            {
              "begin": "\\[",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.begin.bracket.square.go"
                }
              },
              "end": "\\]",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.square.go"
                }
              },
              "patterns": [
                {
                  "include": "$self"
                }
              ]
            }
          ]
        },
        "built_in_functions": {
          "comment": "Built-in functions",
          "patterns": [
            {
              "match": "\\b(append|cap|close|complex|copy|delete|imag|len|panic|print|println|real|recover|min|max|clear)\\b(?=\\()",
              "name": "entity.name.function.support.builtin.go"
            },
            {
              "begin": "(?:(\\bnew\\b)(\\())",
              "beginCaptures": {
                "1": {
                  "name": "entity.name.function.support.builtin.go"
                },
                "2": {
                  "name": "punctuation.definition.begin.bracket.round.go"
                }
              },
              "comment": "new keyword",
              "end": "\\)",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.round.go"
                }
              },
              "patterns": [
                {
                  "include": "#functions"
                },
                {
                  "include": "#struct_variables_types"
                },
                {
                  "include": "#type-declarations"
                },
                {
                  "include": "#generic_types"
                },
                {
                  "match": "(?:\\w+)",
                  "name": "entity.name.type.go"
                },
                {
                  "include": "$self"
                }
              ]
            },
            {
              "begin": "(?:(\\bmake\\b)(?:(\\()((?:(?:(?:[\\*\\[\\]]+)?(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+(?:\\([^)]+\\))?)?(?:[\\[\\]\\*]+)?(?:(?!\\bmap\\b)(?:[\\w\\.]+))?(\\[(?:(?:[\\S]+)(?:(?:\\,\\s*(?:[\\S]+))*))?\\])?(?:\\,)?)?))",
              "beginCaptures": {
                "1": {
                  "name": "entity.name.function.support.builtin.go"
                },
                "2": {
                  "name": "punctuation.definition.begin.bracket.round.go"
                },
                "3": {
                  "patterns": [
                    {
                      "include": "#type-declarations-without-brackets"
                    },
                    {
                      "include": "#parameter-variable-types"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "comment": "make keyword",
              "end": "\\)",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.round.go"
                }
              },
              "patterns": [
                {
                  "include": "$self"
                }
              ]
            }
          ]
        },
        "comments": {
          "patterns": [
            {
              "begin": "(\\/\\*)",
              "beginCaptures": {
                "1": {
                  "name": "punctuation.definition.comment.go"
                }
              },
              "end": "(\\*\\/)",
              "endCaptures": {
                "1": {
                  "name": "punctuation.definition.comment.go"
                }
              },
              "name": "comment.block.go"
            },
            {
              "begin": "(\\/\\/)",
              "beginCaptures": {
                "1": {
                  "name": "punctuation.definition.comment.go"
                }
              },
              "end": "(?:\\n|$)",
              "name": "comment.line.double-slash.go"
            }
          ]
        },
        "delimiters": {
          "patterns": [
            {
              "match": "\\,",
              "name": "punctuation.other.comma.go"
            },
            {
              "match": "\\.(?!\\.\\.)",
              "name": "punctuation.other.period.go"
            },
            {
              "match": ":(?!=)",
              "name": "punctuation.other.colon.go"
            }
          ]
        },
        "double_parentheses_types": {
          "captures": {
            "1": {
              "patterns": [
                {
                  "include": "#type-declarations-without-brackets"
                },
                {
                  "match": "\\(",
                  "name": "punctuation.definition.begin.bracket.round.go"
                },
                {
                  "match": "\\)",
                  "name": "punctuation.definition.end.bracket.round.go"
                },
                {
                  "match": "\\[",
                  "name": "punctuation.definition.begin.bracket.square.go"
                },
                {
                  "match": "\\]",
                  "name": "punctuation.definition.end.bracket.square.go"
                },
                {
                  "match": "\\w+",
                  "name": "entity.name.type.go"
                }
              ]
            }
          },
          "comment": "double parentheses types",
          "match": "(?:(?<!\\w)(\\((?:[\\w\\.\\[\\]\\*\\&]+)\\))(?=\\())"
        },
        "field_hover": {
          "captures": {
            "1": {
              "patterns": [
                {
                  "include": "#type-declarations"
                },
                {
                  "match": "\\w+",
                  "name": "variable.other.property.go"
                }
              ]
            },
            "2": {
              "patterns": [
                {
                  "match": "\\binvalid\\b\\s+\\btype\\b",
                  "name": "invalid.field.go"
                },
                {
                  "include": "#type-declarations-without-brackets"
                },
                {
                  "include": "#parameter-variable-types"
                },
                {
                  "match": "\\w+",
                  "name": "entity.name.type.go"
                }
              ]
            }
          },
          "comment": "struct field property and types when hovering with the mouse",
          "match": "(?:(?<=^\\bfield\\b)\\s+([\\w\\*\\.]+)\\s+([\\s\\S]+))"
        },
        "function_declaration": {
          "begin": "(?:^(\\bfunc\\b)(?:\\s*(\\([^)]+\\)\\s*)?(?:(\\w+)(?=\\(|\\[))?))",
          "beginCaptures": {
            "1": {
              "name": "keyword.function.go"
            },
            "2": {
              "patterns": [
                {
                  "begin": "\\(",
                  "beginCaptures": {
                    "0": {
                      "name": "punctuation.definition.begin.bracket.round.go"
                    }
                  },
                  "end": "\\)",
                  "endCaptures": {
                    "0": {
                      "name": "punctuation.definition.end.bracket.round.go"
                    }
                  },
                  "patterns": [
                    {
                      "captures": {
                        "1": {
                          "name": "variable.parameter.go"
                        },
                        "2": {
                          "patterns": [
                            {
                              "include": "#type-declarations-without-brackets"
                            },
                            {
                              "include": "#parameter-variable-types"
                            },
                            {
                              "match": "(?:\\w+)",
                              "name": "entity.name.type.go"
                            }
                          ]
                        }
                      },
                      "match": "(?:(\\w+(?:\\s+))?((?:[\\w\\.\\*]+)(?:\\[(?:(?:(?:[\\w\\.\\*]+)(?:\\,\\s+)?)+)?\\])?))"
                    },
                    {
                      "include": "$self"
                    }
                  ]
                }
              ]
            },
            "3": {
              "patterns": [
                {
                  "match": "\\d\\w*",
                  "name": "invalid.illegal.identifier.go"
                },
                {
                  "match": "\\w+",
                  "name": "entity.name.function.go"
                }
              ]
            }
          },
          "comment": "Function declarations",
          "end": "(?:(?<=\\))\\s*((?:(?:(?:[\\*\\[\\]]+)?(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+)?(?!(?:[\\[\\]\\*]+)?(?:\\bstruct\\b|\\binterface\\b))[\\w\\.\\-\\*\\[\\]]+)?\\s*(?=\\{))",
          "endCaptures": {
            "1": {
              "patterns": [
                {
                  "include": "#type-declarations-without-brackets"
                },
                {
                  "include": "#parameter-variable-types"
                },
                {
                  "match": "(?:\\w+)",
                  "name": "entity.name.type.go"
                }
              ]
            }
          },
          "patterns": [
            {
              "begin": "\\(",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.begin.bracket.round.go"
                }
              },
              "end": "\\)",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.round.go"
                }
              },
              "patterns": [
                {
                  "include": "#function_param_types"
                }
              ]
            },
            {
              "begin": "(?:([\\w\\.\\*]+)?(\\[))",
              "beginCaptures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "(?:\\w+)",
                      "name": "entity.name.type.go"
                    }
                  ]
                },
                "2": {
                  "name": "punctuation.definition.begin.bracket.square.go"
                }
              },
              "end": "\\]",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.square.go"
                }
              },
              "patterns": [
                {
                  "include": "#generic_param_types"
                }
              ]
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations-without-brackets"
                    },
                    {
                      "include": "#parameter-variable-types"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "comment": "single function as a type returned type(s) declaration",
              "match": "(?:(?<=\\))(?:\\s*)((?:(?:\\s*(?:[\\*\\[\\]]+)?(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+)?[\\w\\*\\.\\[\\]<>\\-]+(?:\\s*)(?:\\/(?:\\/|\\*).*)?)$)"
            },
            {
              "include": "$self"
            }
          ]
        },
        "function_param_types": {
          "comment": "function parameter variables and types",
          "patterns": [
            {
              "include": "#struct_variables_types"
            },
            {
              "include": "#interface_variables_types"
            },
            {
              "include": "#type-declarations-without-brackets"
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.parameter.go"
                    }
                  ]
                }
              },
              "comment": "struct/interface type declaration",
              "match": "((?:(?:\\b\\w+\\,\\s*)+)?\\b\\w+)\\s+(?=(?:(?:\\s*(?:[\\*\\[\\]]+)?(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+)?(?:[\\[\\]\\*]+)?\\b(?:struct|interface)\\b\\s*\\{)"
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.parameter.go"
                    }
                  ]
                }
              },
              "comment": "multiple parameters one type -with multilines",
              "match": "(?:(?:(?<=\\()|^\\s*)((?:(?:\\b\\w+\\,\\s*)+)(?:/(?:/|\\*).*)?)$)"
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#delimiters"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.parameter.go"
                    }
                  ]
                },
                "2": {
                  "patterns": [
                    {
                      "include": "#type-declarations-without-brackets"
                    },
                    {
                      "include": "#parameter-variable-types"
                    },
                    {
                      "match": "(?:\\w+)",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "comment": "multiple params and types | multiple params one type | one param one type",
              "match": "(?:((?:(?:\\b\\w+\\,\\s*)+)?\\b\\w+)(?:\\s+)((?:(?:\\s*(?:[\\*\\[\\]]+)?(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+)?(?:(?:(?:[\\w\\[\\]\\.\\*]+)?(?:(?:\\bfunc\\b\\((?:[^)]+)?\\))(?:(?:\\s*(?:[\\*\\[\\]]+)?(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+)?(?:\\s*))+(?:(?:(?:[\\w\\*\\.\\[\\]]+)|(?:\\((?:[^)]+)?\\))))?)|(?:(?:[\\[\\]\\*]+)?[\\w\\*\\.]+(?:\\[(?:[^\\]]+)\\])?(?:[\\w\\.\\*]+)?)+)))"
            },
            {
              "begin": "(?:([\\w\\.\\*]+)?(\\[))",
              "beginCaptures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "(?:\\w+)",
                      "name": "entity.name.type.go"
                    }
                  ]
                },
                "2": {
                  "name": "punctuation.definition.begin.bracket.square.go"
                }
              },
              "end": "\\]",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.square.go"
                }
              },
              "patterns": [
                {
                  "include": "#generic_param_types"
                }
              ]
            },
            {
              "begin": "\\(",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.begin.bracket.round.go"
                }
              },
              "end": "\\)",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.round.go"
                }
              },
              "patterns": [
                {
                  "include": "#function_param_types"
                }
              ]
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "(?:\\w+)",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "comment": "other types",
              "match": "([\\w\\.]+)"
            },
            {
              "include": "$self"
            }
          ]
        },
        "functions": {
          "begin": "(?:(\\bfunc\\b)(?=\\())",
          "beginCaptures": {
            "1": {
              "name": "keyword.function.go"
            }
          },
          "comment": "Functions",
          "end": "(?:(?<=\\))(\\s*(?:(?:[\\*\\[\\]]+)?(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+)?((?:(?:\\s*(?:(?:[\\[\\]\\*]+)?[\\w\\.\\*]+)?(?:(?:\\[(?:(?:[\\w\\.\\*]+)?(?:\\[(?:[^\\]]+)?\\])?(?:\\,\\s+)?)+\\])|(?:\\((?:[^)]+)?\\)))?(?:[\\w\\.\\*]+)?)(?:\\s*)(?=\\{))|(?:\\s*(?:(?:(?:[\\[\\]\\*]+)?(?!\\bfunc\\b)(?:[\\w\\.\\*]+)(?:\\[(?:(?:[\\w\\.\\*]+)?(?:\\[(?:[^\\]]+)?\\])?(?:\\,\\s+)?)+\\])?(?:[\\w\\.\\*]+)?)|(?:\\((?:[^)]+)?\\)))))?)",
          "endCaptures": {
            "1": {
              "patterns": [
                {
                  "include": "#type-declarations"
                }
              ]
            },
            "2": {
              "patterns": [
                {
                  "include": "#type-declarations-without-brackets"
                },
                {
                  "include": "#parameter-variable-types"
                },
                {
                  "match": "(?:\\w+)",
                  "name": "entity.name.type.go"
                }
              ]
            }
          },
          "patterns": [
            {
              "include": "#parameter-variable-types"
            }
          ]
        },
        "functions_inline": {
          "captures": {
            "1": {
              "name": "keyword.function.go"
            },
            "2": {
              "patterns": [
                {
                  "include": "#type-declarations-without-brackets"
                },
                {
                  "begin": "\\(",
                  "beginCaptures": {
                    "0": {
                      "name": "punctuation.definition.begin.bracket.round.go"
                    }
                  },
                  "end": "\\)",
                  "endCaptures": {
                    "0": {
                      "name": "punctuation.definition.end.bracket.round.go"
                    }
                  },
                  "patterns": [
                    {
                      "include": "#function_param_types"
                    },
                    {
                      "include": "$self"
                    }
                  ]
                },
                {
                  "match": "\\[",
                  "name": "punctuation.definition.begin.bracket.square.go"
                },
                {
                  "match": "\\]",
                  "name": "punctuation.definition.end.bracket.square.go"
                },
                {
                  "match": "\\{",
                  "name": "punctuation.definition.begin.bracket.curly.go"
                },
                {
                  "match": "\\}",
                  "name": "punctuation.definition.end.bracket.curly.go"
                },
                {
                  "match": "(?:\\w+)",
                  "name": "entity.name.type.go"
                }
              ]
            }
          },
          "comment": "functions in-line with multi return types",
          "match": "(?:(\\bfunc\\b)((?:\\((?:[^/]*?)\\))(?:\\s+)(?:\\((?:[^/]*?)\\)))(?:\\s+)(?=\\{))"
        },
        "generic_param_types": {
          "comment": "generic parameter variables and types",
          "patterns": [
            {
              "include": "#struct_variables_types"
            },
            {
              "include": "#interface_variables_types"
            },
            {
              "include": "#type-declarations-without-brackets"
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.parameter.go"
                    }
                  ]
                }
              },
              "comment": "struct/interface type declaration",
              "match": "((?:(?:\\b\\w+\\,\\s*)+)?\\b\\w+)\\s+(?=(?:(?:\\s*(?:[\\*\\[\\]]+)?(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+)?(?:[\\[\\]\\*]+)?\\b(?:struct|interface)\\b\\s*\\{)"
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.parameter.go"
                    }
                  ]
                }
              },
              "comment": "multiple parameters one type -with multilines",
              "match": "(?:(?:(?<=\\()|^\\s*)((?:(?:\\b\\w+\\,\\s*)+)(?:/(?:/|\\*).*)?)$)"
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#delimiters"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.parameter.go"
                    }
                  ]
                },
                "2": {
                  "patterns": [
                    {
                      "include": "#type-declarations-without-brackets"
                    },
                    {
                      "include": "#parameter-variable-types"
                    },
                    {
                      "match": "(?:\\w+)",
                      "name": "entity.name.type.go"
                    }
                  ]
                },
                "3": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "(?:\\w+)",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "comment": "multiple params and types | multiple types one param",
              "match": "(?:((?:(?:\\b\\w+\\,\\s*)+)?\\b\\w+)(?:\\s+)((?:(?:\\s*(?:[\\*\\[\\]]+)?(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+)?(?:(?:(?:[\\w\\[\\]\\.\\*]+)?(?:(?:\\bfunc\\b\\((?:[^)]+)?\\))(?:(?:\\s*(?:[\\*\\[\\]]+)?(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+)?(?:\\s*))+(?:(?:(?:[\\w\\*\\.]+)|(?:\\((?:[^)]+)?\\))))?)|(?:(?:(?:[\\w\\*\\.\\~]+)|(?:\\[(?:(?:[\\w\\.\\*]+)?(?:\\[(?:[^\\]]+)?\\])?(?:\\,\\s+)?)+\\]))(?:[\\w\\.\\*]+)?)+)))"
            },
            {
              "begin": "(?:([\\w\\.\\*]+)?(\\[))",
              "beginCaptures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "(?:\\w+)",
                      "name": "entity.name.type.go"
                    }
                  ]
                },
                "2": {
                  "name": "punctuation.definition.begin.bracket.square.go"
                }
              },
              "end": "\\]",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.square.go"
                }
              },
              "patterns": [
                {
                  "include": "#generic_param_types"
                }
              ]
            },
            {
              "begin": "\\(",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.begin.bracket.round.go"
                }
              },
              "end": "\\)",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.round.go"
                }
              },
              "patterns": [
                {
                  "include": "#function_param_types"
                }
              ]
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "(?:\\w+)",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "comment": "other types",
              "match": "(?:\\b([\\w\\.]+))"
            },
            {
              "include": "$self"
            }
          ]
        },
        "generic_types": {
          "captures": {
            "1": {
              "patterns": [
                {
                  "include": "#type-declarations"
                },
                {
                  "match": "\\w+",
                  "name": "entity.name.type.go"
                }
              ]
            },
            "2": {
              "patterns": [
                {
                  "include": "#parameter-variable-types"
                }
              ]
            }
          },
          "comment": "Generic support for all types",
          "match": "(?:([\\w\\.\\*]+)(\\[(?:[^\\]]+)?\\]))"
        },
        "group-functions": {
          "comment": "all statements related to functions",
          "patterns": [
            {
              "include": "#function_declaration"
            },
            {
              "include": "#functions_inline"
            },
            {
              "include": "#functions"
            },
            {
              "include": "#built_in_functions"
            },
            {
              "include": "#support_functions"
            }
          ]
        },
        "group-types": {
          "comment": "all statements related to types",
          "patterns": [
            {
              "include": "#other_struct_interface_expressions"
            },
            {
              "include": "#type_assertion_inline"
            },
            {
              "include": "#struct_variables_types"
            },
            {
              "include": "#interface_variables_types"
            },
            {
              "include": "#single_type"
            },
            {
              "include": "#multi_types"
            },
            {
              "include": "#struct_interface_declaration"
            },
            {
              "include": "#double_parentheses_types"
            },
            {
              "include": "#switch_types"
            },
            {
              "include": "#type-declarations"
            }
          ]
        },
        "group-variables": {
          "comment": "all statements related to variables",
          "patterns": [
            {
              "include": "#var_const_assignment"
            },
            {
              "include": "#variable_assignment"
            },
            {
              "include": "#label_loop_variables"
            },
            {
              "include": "#slice_index_variables"
            },
            {
              "include": "#property_variables"
            },
            {
              "include": "#switch_select_case_variables"
            },
            {
              "include": "#other_variables"
            }
          ]
        },
        "import": {
          "comment": "import",
          "patterns": [
            {
              "begin": "\\b(import)\\s+",
              "beginCaptures": {
                "1": {
                  "name": "keyword.control.import.go"
                }
              },
              "comment": "import",
              "end": "(?!\\G)",
              "patterns": [
                {
                  "include": "#imports"
                }
              ]
            }
          ]
        },
        "imports": {
          "comment": "import package(s)",
          "patterns": [
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#delimiters"
                    },
                    {
                      "match": "(?:\\w+)",
                      "name": "variable.other.import.go"
                    }
                  ]
                },
                "2": {
                  "name": "string.quoted.double.go"
                },
                "3": {
                  "name": "punctuation.definition.string.begin.go"
                },
                "4": {
                  "name": "entity.name.import.go"
                },
                "5": {
                  "name": "punctuation.definition.string.end.go"
                }
              },
              "match": "(\\s*[\\w\\.]+)?\\s*((\")([^\"]*)(\"))"
            },
            {
              "begin": "\\(",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.imports.begin.bracket.round.go"
                }
              },
              "end": "\\)",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.imports.end.bracket.round.go"
                }
              },
              "patterns": [
                {
                  "include": "#comments"
                },
                {
                  "include": "#imports"
                }
              ]
            },
            {
              "include": "$self"
            }
          ]
        },
        "interface_variables_types": {
          "begin": "(\\binterface\\b)\\s*(\\{)",
          "beginCaptures": {
            "1": {
              "name": "keyword.interface.go"
            },
            "2": {
              "name": "punctuation.definition.begin.bracket.curly.go"
            }
          },
          "comment": "interface variable types",
          "end": "\\}",
          "endCaptures": {
            "0": {
              "name": "punctuation.definition.end.bracket.curly.go"
            }
          },
          "patterns": [
            {
              "include": "#interface_variables_types_field"
            },
            {
              "include": "$self"
            }
          ]
        },
        "interface_variables_types_field": {
          "comment": "interface variable type fields",
          "patterns": [
            {
              "include": "#support_functions"
            },
            {
              "include": "#type-declarations-without-brackets"
            },
            {
              "begin": "(?:([\\w\\.\\*]+)?(\\[))",
              "beginCaptures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "(?:\\w+)",
                      "name": "entity.name.type.go"
                    }
                  ]
                },
                "2": {
                  "name": "punctuation.definition.begin.bracket.square.go"
                }
              },
              "end": "\\]",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.square.go"
                }
              },
              "patterns": [
                {
                  "include": "#generic_param_types"
                }
              ]
            },
            {
              "begin": "\\(",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.begin.bracket.round.go"
                }
              },
              "end": "\\)",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.round.go"
                }
              },
              "patterns": [
                {
                  "include": "#function_param_types"
                }
              ]
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "comment": "other types",
              "match": "([\\w\\.]+)"
            }
          ]
        },
        "keywords": {
          "patterns": [
            {
              "comment": "Flow control keywords",
              "match": "\\b(break|case|continue|default|defer|else|fallthrough|for|go|goto|if|range|return|select|switch)\\b",
              "name": "keyword.control.go"
            },
            {
              "match": "\\bchan\\b",
              "name": "keyword.channel.go"
            },
            {
              "match": "\\bconst\\b",
              "name": "keyword.const.go"
            },
            {
              "match": "\\bvar\\b",
              "name": "keyword.var.go"
            },
            {
              "match": "\\bfunc\\b",
              "name": "keyword.function.go"
            },
            {
              "match": "\\binterface\\b",
              "name": "keyword.interface.go"
            },
            {
              "match": "\\bmap\\b",
              "name": "keyword.map.go"
            },
            {
              "match": "\\bstruct\\b",
              "name": "keyword.struct.go"
            },
            {
              "match": "\\bimport\\b",
              "name": "keyword.control.import.go"
            },
            {
              "match": "\\btype\\b",
              "name": "keyword.type.go"
            }
          ]
        },
        "label_loop_variables": {
          "captures": {
            "1": {
              "patterns": [
                {
                  "include": "#type-declarations"
                },
                {
                  "match": "\\w+",
                  "name": "variable.other.label.go"
                }
              ]
            }
          },
          "comment": "labeled loop variable name",
          "match": "((?:^\\s*\\w+:\\s*$)|(?:^\\s*(?:\\bbreak\\b|\\bgoto\\b|\\bcontinue\\b)\\s+\\w+(?:\\s*/(?:/|\\*)\\s*.*)?$))"
        },
        "language_constants": {
          "captures": {
            "1": {
              "name": "constant.language.boolean.go"
            },
            "2": {
              "name": "constant.language.null.go"
            },
            "3": {
              "name": "constant.language.iota.go"
            }
          },
          "comment": "Language constants",
          "match": "\\b(?:(true|false)|(nil)|(iota))\\b"
        },
        "map_types": {
          "begin": "(?:(\\bmap\\b)(\\[))",
          "beginCaptures": {
            "1": {
              "name": "keyword.map.go"
            },
            "2": {
              "name": "punctuation.definition.begin.bracket.square.go"
            }
          },
          "comment": "map types",
          "end": "(?:(\\])((?:(?:(?:[\\*\\[\\]]+)?(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+)?(?!(?:[\\[\\]\\*]+)?\\b(?:func|struct|map)\\b)(?:[\\*\\[\\]]+)?(?:[\\w\\.]+)(?:\\[(?:(?:[\\w\\.\\*\\[\\]{}]+)(?:(?:\\,\\s*(?:[\\w\\.\\*\\[\\]{}]+))*))?\\])?)?)",
          "endCaptures": {
            "1": {
              "name": "punctuation.definition.end.bracket.square.go"
            },
            "2": {
              "patterns": [
                {
                  "include": "#type-declarations-without-brackets"
                },
                {
                  "match": "\\[",
                  "name": "punctuation.definition.begin.bracket.square.go"
                },
                {
                  "match": "\\]",
                  "name": "punctuation.definition.end.bracket.square.go"
                },
                {
                  "match": "\\w+",
                  "name": "entity.name.type.go"
                }
              ]
            }
          },
          "patterns": [
            {
              "include": "#type-declarations-without-brackets"
            },
            {
              "include": "#parameter-variable-types"
            },
            {
              "include": "#functions"
            },
            {
              "match": "\\[",
              "name": "punctuation.definition.begin.bracket.square.go"
            },
            {
              "match": "\\]",
              "name": "punctuation.definition.end.bracket.square.go"
            },
            {
              "match": "\\{",
              "name": "punctuation.definition.begin.bracket.curly.go"
            },
            {
              "match": "\\}",
              "name": "punctuation.definition.end.bracket.curly.go"
            },
            {
              "match": "\\(",
              "name": "punctuation.definition.begin.bracket.round.go"
            },
            {
              "match": "\\)",
              "name": "punctuation.definition.end.bracket.round.go"
            },
            {
              "match": "\\w+",
              "name": "entity.name.type.go"
            }
          ]
        },
        "multi_types": {
          "begin": "(\\btype\\b)\\s*(\\()",
          "beginCaptures": {
            "1": {
              "name": "keyword.type.go"
            },
            "2": {
              "name": "punctuation.definition.begin.bracket.round.go"
            }
          },
          "comment": "multi type declaration",
          "end": "\\)",
          "endCaptures": {
            "0": {
              "name": "punctuation.definition.end.bracket.round.go"
            }
          },
          "patterns": [
            {
              "include": "#struct_variables_types"
            },
            {
              "include": "#interface_variables_types"
            },
            {
              "include": "#type-declarations-without-brackets"
            },
            {
              "include": "#parameter-variable-types"
            },
            {
              "match": "(?:\\w+)",
              "name": "entity.name.type.go"
            }
          ]
        },
        "numeric_literals": {
          "captures": {
            "0": {
              "patterns": [
                {
                  "begin": "(?=.)",
                  "end": "(?:\\n|$)",
                  "patterns": [
                    {
                      "captures": {
                        "1": {
                          "name": "constant.numeric.decimal.go",
                          "patterns": [
                            {
                              "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "2": {
                          "name": "punctuation.separator.constant.numeric.go"
                        },
                        "3": {
                          "name": "constant.numeric.decimal.point.go"
                        },
                        "4": {
                          "name": "constant.numeric.decimal.go",
                          "patterns": [
                            {
                              "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "5": {
                          "name": "punctuation.separator.constant.numeric.go"
                        },
                        "6": {
                          "name": "keyword.other.unit.exponent.decimal.go"
                        },
                        "7": {
                          "name": "keyword.operator.plus.exponent.decimal.go"
                        },
                        "8": {
                          "name": "keyword.operator.minus.exponent.decimal.go"
                        },
                        "9": {
                          "name": "constant.numeric.exponent.decimal.go",
                          "patterns": [
                            {
                              "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "10": {
                          "name": "keyword.other.unit.imaginary.go"
                        },
                        "11": {
                          "name": "constant.numeric.decimal.go",
                          "patterns": [
                            {
                              "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "12": {
                          "name": "punctuation.separator.constant.numeric.go"
                        },
                        "13": {
                          "name": "keyword.other.unit.exponent.decimal.go"
                        },
                        "14": {
                          "name": "keyword.operator.plus.exponent.decimal.go"
                        },
                        "15": {
                          "name": "keyword.operator.minus.exponent.decimal.go"
                        },
                        "16": {
                          "name": "constant.numeric.exponent.decimal.go",
                          "patterns": [
                            {
                              "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "17": {
                          "name": "keyword.other.unit.imaginary.go"
                        },
                        "18": {
                          "name": "constant.numeric.decimal.point.go"
                        },
                        "19": {
                          "name": "constant.numeric.decimal.go",
                          "patterns": [
                            {
                              "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "20": {
                          "name": "punctuation.separator.constant.numeric.go"
                        },
                        "21": {
                          "name": "keyword.other.unit.exponent.decimal.go"
                        },
                        "22": {
                          "name": "keyword.operator.plus.exponent.decimal.go"
                        },
                        "23": {
                          "name": "keyword.operator.minus.exponent.decimal.go"
                        },
                        "24": {
                          "name": "constant.numeric.exponent.decimal.go",
                          "patterns": [
                            {
                              "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "25": {
                          "name": "keyword.other.unit.imaginary.go"
                        },
                        "26": {
                          "name": "keyword.other.unit.hexadecimal.go"
                        },
                        "27": {
                          "name": "constant.numeric.hexadecimal.go",
                          "patterns": [
                            {
                              "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "28": {
                          "name": "punctuation.separator.constant.numeric.go"
                        },
                        "29": {
                          "name": "constant.numeric.hexadecimal.go"
                        },
                        "30": {
                          "name": "constant.numeric.hexadecimal.go",
                          "patterns": [
                            {
                              "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "31": {
                          "name": "punctuation.separator.constant.numeric.go"
                        },
                        "32": {
                          "name": "keyword.other.unit.exponent.hexadecimal.go"
                        },
                        "33": {
                          "name": "keyword.operator.plus.exponent.hexadecimal.go"
                        },
                        "34": {
                          "name": "keyword.operator.minus.exponent.hexadecimal.go"
                        },
                        "35": {
                          "name": "constant.numeric.exponent.hexadecimal.go",
                          "patterns": [
                            {
                              "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "36": {
                          "name": "keyword.other.unit.imaginary.go"
                        },
                        "37": {
                          "name": "keyword.other.unit.hexadecimal.go"
                        },
                        "38": {
                          "name": "constant.numeric.hexadecimal.go",
                          "patterns": [
                            {
                              "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "39": {
                          "name": "punctuation.separator.constant.numeric.go"
                        },
                        "40": {
                          "name": "keyword.other.unit.exponent.hexadecimal.go"
                        },
                        "41": {
                          "name": "keyword.operator.plus.exponent.hexadecimal.go"
                        },
                        "42": {
                          "name": "keyword.operator.minus.exponent.hexadecimal.go"
                        },
                        "43": {
                          "name": "constant.numeric.exponent.hexadecimal.go",
                          "patterns": [
                            {
                              "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "44": {
                          "name": "keyword.other.unit.imaginary.go"
                        },
                        "45": {
                          "name": "keyword.other.unit.hexadecimal.go"
                        },
                        "46": {
                          "name": "constant.numeric.hexadecimal.go"
                        },
                        "47": {
                          "name": "constant.numeric.hexadecimal.go",
                          "patterns": [
                            {
                              "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "48": {
                          "name": "punctuation.separator.constant.numeric.go"
                        },
                        "49": {
                          "name": "keyword.other.unit.exponent.hexadecimal.go"
                        },
                        "50": {
                          "name": "keyword.operator.plus.exponent.hexadecimal.go"
                        },
                        "51": {
                          "name": "keyword.operator.minus.exponent.hexadecimal.go"
                        },
                        "52": {
                          "name": "constant.numeric.exponent.hexadecimal.go",
                          "patterns": [
                            {
                              "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "53": {
                          "name": "keyword.other.unit.imaginary.go"
                        }
                      },
                      "match": "(?:(?:(?:(?:(?:\\G(?=[0-9.])(?!0[xXbBoO])(\\d(?:\\d|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)((?:(?<=\\d)\\.|\\.(?=\\d)))(\\d(?:\\d|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)?(?:(?<!_)([eE])(\\+?)(-?)((?:\\d(?:\\d|(?:(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)))?(i(?!\\w))?(?:\\n|$)|\\G(?=[0-9.])(?!0[xXbBoO])(\\d(?:\\d|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)(?<!_)([eE])(\\+?)(-?)((?:\\d(?:\\d|(?:(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*))(i(?!\\w))?(?:\\n|$))|\\G((?:(?<=\\d)\\.|\\.(?=\\d)))(\\d(?:\\d|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)(?:(?<!_)([eE])(\\+?)(-?)((?:\\d(?:\\d|(?:(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)))?(i(?!\\w))?(?:\\n|$))|(\\G0[xX])_?([0-9a-fA-F](?:[0-9a-fA-F]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)((?:(?<=[0-9a-fA-F])\\.|\\.(?=[0-9a-fA-F])))([0-9a-fA-F](?:[0-9a-fA-F]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)?(?<!_)([pP])(\\+?)(-?)((?:\\d(?:\\d|(?:(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*))(i(?!\\w))?(?:\\n|$))|(\\G0[xX])_?([0-9a-fA-F](?:[0-9a-fA-F]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)(?<!_)([pP])(\\+?)(-?)((?:\\d(?:\\d|(?:(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*))(i(?!\\w))?(?:\\n|$))|(\\G0[xX])((?:(?<=[0-9a-fA-F])\\.|\\.(?=[0-9a-fA-F])))([0-9a-fA-F](?:[0-9a-fA-F]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)(?<!_)([pP])(\\+?)(-?)((?:\\d(?:\\d|(?:(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*))(i(?!\\w))?(?:\\n|$))"
                    },
                    {
                      "captures": {
                        "1": {
                          "name": "constant.numeric.decimal.go",
                          "patterns": [
                            {
                              "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "2": {
                          "name": "punctuation.separator.constant.numeric.go"
                        },
                        "3": {
                          "name": "keyword.other.unit.imaginary.go"
                        },
                        "4": {
                          "name": "keyword.other.unit.binary.go"
                        },
                        "5": {
                          "name": "constant.numeric.binary.go",
                          "patterns": [
                            {
                              "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "6": {
                          "name": "punctuation.separator.constant.numeric.go"
                        },
                        "7": {
                          "name": "keyword.other.unit.imaginary.go"
                        },
                        "8": {
                          "name": "keyword.other.unit.octal.go"
                        },
                        "9": {
                          "name": "constant.numeric.octal.go",
                          "patterns": [
                            {
                              "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "10": {
                          "name": "punctuation.separator.constant.numeric.go"
                        },
                        "11": {
                          "name": "keyword.other.unit.imaginary.go"
                        },
                        "12": {
                          "name": "keyword.other.unit.hexadecimal.go"
                        },
                        "13": {
                          "name": "constant.numeric.hexadecimal.go",
                          "patterns": [
                            {
                              "match": "(?<=[0-9a-fA-F])_(?=[0-9a-fA-F])",
                              "name": "punctuation.separator.constant.numeric.go"
                            }
                          ]
                        },
                        "14": {
                          "name": "punctuation.separator.constant.numeric.go"
                        },
                        "15": {
                          "name": "keyword.other.unit.imaginary.go"
                        }
                      },
                      "match": "(?:(?:(?:\\G(?=[0-9.])(?!0[xXbBoO])(\\d(?:\\d|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)(i(?!\\w))?(?:\\n|$)|(\\G0[bB])_?([01](?:[01]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)(i(?!\\w))?(?:\\n|$))|(\\G0[oO]?)_?((?:[0-7]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))+)(i(?!\\w))?(?:\\n|$))|(\\G0[xX])_?([0-9a-fA-F](?:[0-9a-fA-F]|((?<=[0-9a-fA-F])_(?=[0-9a-fA-F])))*)(i(?!\\w))?(?:\\n|$))"
                    },
                    {
                      "match": "(?:(?:[0-9a-zA-Z_\\.])|(?<=[eEpP])[+-])+",
                      "name": "invalid.illegal.constant.numeric.go"
                    }
                  ]
                }
              ]
            }
          },
          "match": "(?<!\\w)\\.?\\d(?:(?:[0-9a-zA-Z_\\.])|(?<=[eEpP])[+-])*"
        },
        "operators": {
          "comment": "Note that the order here is very important!",
          "patterns": [
            {
              "match": "((?:\\*|\\&)+)(?:(?!\\d)(?=(?:[\\w\\[\\]])|(?:<-)))",
              "name": "keyword.operator.address.go"
            },
            {
              "match": "<-",
              "name": "keyword.operator.channel.go"
            },
            {
              "match": "--",
              "name": "keyword.operator.decrement.go"
            },
            {
              "match": "\\+\\+",
              "name": "keyword.operator.increment.go"
            },
            {
              "match": "(==|!=|<=|>=|<(?!<)|>(?!>))",
              "name": "keyword.operator.comparison.go"
            },
            {
              "match": "(&&|\\|\\||!)",
              "name": "keyword.operator.logical.go"
            },
            {
              "match": "(=|\\+=|-=|\\|=|\\^=|\\*=|/=|:=|%=|<<=|>>=|&\\^=|&=)",
              "name": "keyword.operator.assignment.go"
            },
            {
              "match": "(\\+|-|\\*|/|%)",
              "name": "keyword.operator.arithmetic.go"
            },
            {
              "match": "(&(?!\\^)|\\||\\^|&\\^|<<|>>|\\~)",
              "name": "keyword.operator.arithmetic.bitwise.go"
            },
            {
              "match": "\\.\\.\\.",
              "name": "keyword.operator.ellipsis.go"
            }
          ]
        },
        "other_struct_interface_expressions": {
          "comment": "struct and interface expression in-line (before curly bracket)",
          "patterns": [
            {
              "comment": "after control variables must be added exactly here, do not move it! (changing may not affect tests, so be careful!)",
              "include": "#after_control_variables"
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                },
                "2": {
                  "patterns": [
                    {
                      "begin": "\\[",
                      "beginCaptures": {
                        "0": {
                          "name": "punctuation.definition.begin.bracket.square.go"
                        }
                      },
                      "end": "\\]",
                      "endCaptures": {
                        "0": {
                          "name": "punctuation.definition.end.bracket.square.go"
                        }
                      },
                      "patterns": [
                        {
                          "include": "#type-declarations"
                        },
                        {
                          "match": "\\w+",
                          "name": "entity.name.type.go"
                        },
                        {
                          "include": "$self"
                        }
                      ]
                    }
                  ]
                }
              },
              "match": "(\\b[\\w\\.]+)(\\[(?:[^\\]]+)?\\])?(?=\\{)(?<!\\bstruct\\b|\\binterface\\b)"
            }
          ]
        },
        "other_variables": {
          "comment": "all other variables",
          "match": "\\w+",
          "name": "variable.other.go"
        },
        "package_name": {
          "patterns": [
            {
              "begin": "\\b(package)\\s+",
              "beginCaptures": {
                "1": {
                  "name": "keyword.package.go"
                }
              },
              "comment": "package name",
              "end": "(?!\\G)",
              "patterns": [
                {
                  "match": "\\d\\w*",
                  "name": "invalid.illegal.identifier.go"
                },
                {
                  "match": "\\w+",
                  "name": "entity.name.type.package.go"
                }
              ]
            }
          ]
        },
        "parameter-variable-types": {
          "comment": "function and generic parameter types",
          "patterns": [
            {
              "match": "\\{",
              "name": "punctuation.definition.begin.bracket.curly.go"
            },
            {
              "match": "\\}",
              "name": "punctuation.definition.end.bracket.curly.go"
            },
            {
              "begin": "(?:([\\w\\.\\*]+)?(\\[))",
              "beginCaptures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "(?:\\w+)",
                      "name": "entity.name.type.go"
                    }
                  ]
                },
                "2": {
                  "name": "punctuation.definition.begin.bracket.square.go"
                }
              },
              "end": "\\]",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.square.go"
                }
              },
              "patterns": [
                {
                  "include": "#generic_param_types"
                }
              ]
            },
            {
              "begin": "\\(",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.begin.bracket.round.go"
                }
              },
              "end": "\\)",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.round.go"
                }
              },
              "patterns": [
                {
                  "include": "#function_param_types"
                }
              ]
            }
          ]
        },
        "property_variables": {
          "captures": {
            "1": {
              "patterns": [
                {
                  "include": "#type-declarations"
                },
                {
                  "match": "\\w+",
                  "name": "variable.other.property.go"
                }
              ]
            }
          },
          "comment": "Property variables in struct",
          "match": "((?:\\b[\\w\\.]+)(?::(?!=)))"
        },
        "raw_string_literals": {
          "begin": "`",
          "beginCaptures": {
            "0": {
              "name": "punctuation.definition.string.begin.go"
            }
          },
          "comment": "Raw string literals",
          "end": "`",
          "endCaptures": {
            "0": {
              "name": "punctuation.definition.string.end.go"
            }
          },
          "name": "string.quoted.raw.go",
          "patterns": [
            {
              "include": "#string_placeholder"
            }
          ]
        },
        "runes": {
          "patterns": [
            {
              "begin": "'",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.string.begin.go"
                }
              },
              "end": "'",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.string.end.go"
                }
              },
              "name": "string.quoted.rune.go",
              "patterns": [
                {
                  "match": "\\G(\\\\([0-7]{3}|[abfnrtv\\\\'\"]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})|.)(?=')",
                  "name": "constant.other.rune.go"
                },
                {
                  "match": "[^']+",
                  "name": "invalid.illegal.unknown-rune.go"
                }
              ]
            }
          ]
        },
        "single_type": {
          "patterns": [
            {
              "captures": {
                "1": {
                  "name": "keyword.type.go"
                },
                "2": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                },
                "3": {
                  "patterns": [
                    {
                      "begin": "\\(",
                      "beginCaptures": {
                        "0": {
                          "name": "punctuation.definition.begin.bracket.round.go"
                        }
                      },
                      "end": "\\)",
                      "endCaptures": {
                        "0": {
                          "name": "punctuation.definition.end.bracket.round.go"
                        }
                      },
                      "patterns": [
                        {
                          "include": "#function_param_types"
                        },
                        {
                          "include": "$self"
                        }
                      ]
                    },
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "include": "#generic_types"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "comment": "single type declaration",
              "match": "(?:(?:^\\s*)(\\btype\\b)(?:\\s*)([\\w\\.\\*]+)(?:\\s+)(?!(?:=\\s*)?(?:[\\[\\]\\*]+)?\\b(?:struct|interface)\\b)([\\s\\S]+))"
            },
            {
              "begin": "(?:(?:^|\\s+)(\\btype\\b)(?:\\s*)([\\w\\.\\*]+)(?=\\[))",
              "beginCaptures": {
                "1": {
                  "name": "keyword.type.go"
                },
                "2": {
                  "patterns": [
                    {
                      "include": "#type-declarations-without-brackets"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "comment": "single type declaration with generics",
              "end": "(?:(?<=\\])((?:\\s+)(?:=\\s*)?(?:(?:(?:[\\*\\[\\]]+)?(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+)?(?:(?!(?:[\\[\\]\\*]+)?(?:\\bstruct\\b|\\binterface\\b|\\bfunc\\b))[\\w\\.\\-\\*\\[\\]]+(?:\\,\\s*[\\w\\.\\[\\]\\*]+)*))?)",
              "endCaptures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations-without-brackets"
                    },
                    {
                      "match": "\\[",
                      "name": "punctuation.definition.begin.bracket.square.go"
                    },
                    {
                      "match": "\\]",
                      "name": "punctuation.definition.end.bracket.square.go"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "patterns": [
                {
                  "include": "#struct_variables_types"
                },
                {
                  "include": "#type-declarations-without-brackets"
                },
                {
                  "include": "#parameter-variable-types"
                },
                {
                  "match": "\\[",
                  "name": "punctuation.definition.begin.bracket.square.go"
                },
                {
                  "match": "\\]",
                  "name": "punctuation.definition.end.bracket.square.go"
                },
                {
                  "match": "\\{",
                  "name": "punctuation.definition.begin.bracket.curly.go"
                },
                {
                  "match": "\\}",
                  "name": "punctuation.definition.end.bracket.curly.go"
                },
                {
                  "match": "\\(",
                  "name": "punctuation.definition.begin.bracket.round.go"
                },
                {
                  "match": "\\)",
                  "name": "punctuation.definition.end.bracket.round.go"
                },
                {
                  "match": "\\w+",
                  "name": "entity.name.type.go"
                }
              ]
            }
          ]
        },
        "slice_index_variables": {
          "captures": {
            "1": {
              "patterns": [
                {
                  "include": "#type-declarations"
                },
                {
                  "match": "\\w+",
                  "name": "variable.other.go"
                }
              ]
            }
          },
          "comment": "slice index and capacity variables, to not scope them as property variables",
          "match": "(?<=\\w\\[)((?:(?:\\b[\\w\\.\\*+/\\-\\%<>\\|\\&]+:)|(?::\\b[\\w\\.\\*+/\\-\\%<>\\|\\&]+))(?:\\b[\\w\\.\\*+/\\-\\%<>\\|\\&]+)?(?::\\b[\\w\\.\\*+/\\-\\%<>\\|\\&]+)?)(?=\\])"
        },
        "statements": {
          "patterns": [
            {
              "include": "#package_name"
            },
            {
              "include": "#import"
            },
            {
              "include": "#syntax_errors"
            },
            {
              "include": "#group-functions"
            },
            {
              "include": "#group-types"
            },
            {
              "include": "#group-variables"
            },
            {
              "include": "#field_hover"
            }
          ]
        },
        "storage_types": {
          "patterns": [
            {
              "match": "\\bbool\\b",
              "name": "storage.type.boolean.go"
            },
            {
              "match": "\\bbyte\\b",
              "name": "storage.type.byte.go"
            },
            {
              "match": "\\berror\\b",
              "name": "storage.type.error.go"
            },
            {
              "match": "\\b(complex(64|128)|float(32|64)|u?int(8|16|32|64)?)\\b",
              "name": "storage.type.numeric.go"
            },
            {
              "match": "\\brune\\b",
              "name": "storage.type.rune.go"
            },
            {
              "match": "\\bstring\\b",
              "name": "storage.type.string.go"
            },
            {
              "match": "\\buintptr\\b",
              "name": "storage.type.uintptr.go"
            },
            {
              "match": "\\bany\\b",
              "name": "entity.name.type.any.go"
            }
          ]
        },
        "string_escaped_char": {
          "patterns": [
            {
              "match": "\\\\([0-7]{3}|[abfnrtv\\\\'\"]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})",
              "name": "constant.character.escape.go"
            },
            {
              "match": "\\\\[^0-7xuUabfnrtv\\'\"]",
              "name": "invalid.illegal.unknown-escape.go"
            }
          ]
        },
        "string_literals": {
          "patterns": [
            {
              "begin": "\"",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.string.begin.go"
                }
              },
              "comment": "Interpreted string literals",
              "end": "\"",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.string.end.go"
                }
              },
              "name": "string.quoted.double.go",
              "patterns": [
                {
                  "include": "#string_escaped_char"
                },
                {
                  "include": "#string_placeholder"
                }
              ]
            }
          ]
        },
        "string_placeholder": {
          "patterns": [
            {
              "match": "%(\\[\\d+\\])?([+#\\-0\\x20]{,2}((\\d+|\\*)?(\\.?(\\d+|\\*|(\\[\\d+\\])\\*?)?(\\[\\d+\\])?)?))?[vT%tbcdoqxXUbeEfFgGspw]",
              "name": "constant.other.placeholder.go"
            }
          ]
        },
        "struct_interface_declaration": {
          "captures": {
            "1": {
              "name": "keyword.type.go"
            },
            "2": {
              "patterns": [
                {
                  "include": "#type-declarations"
                },
                {
                  "match": "\\w+",
                  "name": "entity.name.type.go"
                }
              ]
            }
          },
          "comment": "struct, interface type declarations (related to: struct_variables_types, interface_variables_types)",
          "match": "(?:(?:^\\s*)(\\btype\\b)(?:\\s*)([\\w\\.]+))"
        },
        "struct_variable_types_fields_multi": {
          "comment": "struct variable and type fields with multi lines",
          "patterns": [
            {
              "begin": "(?:((?:\\w+(?:\\,\\s*\\w+)*)(?:(?:\\s*(?:[\\*\\[\\]]+)?(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+)?(?:\\s+)(?:[\\[\\]\\*]+)?)(\\bstruct\\b)(?:\\s*)(\\{))",
              "beginCaptures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.other.property.go"
                    }
                  ]
                },
                "2": {
                  "name": "keyword.struct.go"
                },
                "3": {
                  "name": "punctuation.definition.begin.bracket.curly.go"
                }
              },
              "comment": "struct in struct types",
              "end": "\\}",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.curly.go"
                }
              },
              "patterns": [
                {
                  "include": "#struct_variables_types_fields"
                },
                {
                  "include": "$self"
                }
              ]
            },
            {
              "begin": "(?:((?:\\w+(?:\\,\\s*\\w+)*)(?:(?:\\s*(?:[\\*\\[\\]]+)?(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+)?(?:\\s+)(?:[\\[\\]\\*]+)?)(\\binterface\\b)(?:\\s*)(\\{))",
              "beginCaptures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.other.property.go"
                    }
                  ]
                },
                "2": {
                  "name": "keyword.interface.go"
                },
                "3": {
                  "name": "punctuation.definition.begin.bracket.curly.go"
                }
              },
              "comment": "interface in struct types",
              "end": "\\}",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.curly.go"
                }
              },
              "patterns": [
                {
                  "include": "#interface_variables_types_field"
                },
                {
                  "include": "$self"
                }
              ]
            },
            {
              "begin": "(?:((?:\\w+(?:\\,\\s*\\w+)*)(?:(?:\\s*(?:[\\*\\[\\]]+)?(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+)?(?:\\s+)(?:[\\[\\]\\*]+)?)(\\bfunc\\b)(?:\\s*)(\\())",
              "beginCaptures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.other.property.go"
                    }
                  ]
                },
                "2": {
                  "name": "keyword.function.go"
                },
                "3": {
                  "name": "punctuation.definition.begin.bracket.round.go"
                }
              },
              "comment": "function in struct types",
              "end": "\\)",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.round.go"
                }
              },
              "patterns": [
                {
                  "include": "#function_param_types"
                },
                {
                  "include": "$self"
                }
              ]
            },
            {
              "include": "#parameter-variable-types"
            }
          ]
        },
        "struct_variables_types": {
          "begin": "(\\bstruct\\b)\\s*(\\{)",
          "beginCaptures": {
            "1": {
              "name": "keyword.struct.go"
            },
            "2": {
              "name": "punctuation.definition.begin.bracket.curly.go"
            }
          },
          "comment": "Struct variable type",
          "end": "\\}",
          "endCaptures": {
            "0": {
              "name": "punctuation.definition.end.bracket.curly.go"
            }
          },
          "patterns": [
            {
              "include": "#struct_variables_types_fields"
            },
            {
              "include": "$self"
            }
          ]
        },
        "struct_variables_types_fields": {
          "comment": "Struct variable type fields",
          "patterns": [
            {
              "include": "#struct_variable_types_fields_multi"
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "(?:\\w+)",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "comment": "one line - single type",
              "match": "(?:(?<=\\{)\\s*((?:(?:\\s*(?:[\\*\\[\\]]+)?(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+)?(?:[\\w\\.\\*\\[\\]]+))\\s*(?=\\}))"
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "(?:\\w+)",
                      "name": "variable.other.property.go"
                    }
                  ]
                },
                "2": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "(?:\\w+)",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "comment": "one line - property variables and types",
              "match": "(?:(?<=\\{)\\s*((?:(?:\\w+\\,\\s*)+)?(?:\\w+\\s+))((?:(?:\\s*(?:[\\*\\[\\]]+)?(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+)?(?:[\\w\\.\\*\\[\\]]+))\\s*(?=\\}))"
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "captures": {
                        "1": {
                          "patterns": [
                            {
                              "include": "#type-declarations"
                            },
                            {
                              "match": "(?:\\w+)",
                              "name": "variable.other.property.go"
                            }
                          ]
                        },
                        "2": {
                          "patterns": [
                            {
                              "include": "#type-declarations"
                            },
                            {
                              "match": "(?:\\w+)",
                              "name": "entity.name.type.go"
                            }
                          ]
                        }
                      },
                      "match": "(?:((?:(?:\\w+\\,\\s*)+)?(?:\\w+\\s+))?((?:(?:\\s*(?:[\\*\\[\\]]+)?(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+)?(?:[\\S]+)(?:\\;)?))"
                    }
                  ]
                }
              },
              "comment": "one line with semicolon(;) without formatting gofmt - single type | property variables and types",
              "match": "(?:(?<=\\{)((?:\\s*(?:(?:(?:\\w+\\,\\s*)+)?(?:\\w+\\s+))?(?:(?:(?:\\s*(?:[\\*\\[\\]]+)?(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+)?(?:[\\S]+)(?:\\;)?))+)\\s*(?=\\}))"
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "(?:\\w+)",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "comment": "one type only",
              "match": "(?:((?:(?:\\s*(?:[\\*\\[\\]]+)?(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+)?(?:[\\w\\.\\*]+)\\s*)(?:(?=\\`|\\/|\")|$))"
            },
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "(?:\\w+)",
                      "name": "variable.other.property.go"
                    }
                  ]
                },
                "2": {
                  "patterns": [
                    {
                      "include": "#type-declarations-without-brackets"
                    },
                    {
                      "include": "#parameter-variable-types"
                    },
                    {
                      "match": "(?:\\w+)",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "comment": "property variables and types",
              "match": "(?:((?:(?:\\w+\\,\\s*)+)?(?:\\w+\\s+))([^\\`\"\\/]+))"
            }
          ]
        },
        "support_functions": {
          "captures": {
            "1": {
              "name": "entity.name.function.support.go"
            },
            "2": {
              "patterns": [
                {
                  "include": "#type-declarations"
                },
                {
                  "match": "\\d\\w*",
                  "name": "invalid.illegal.identifier.go"
                },
                {
                  "match": "\\w+",
                  "name": "entity.name.function.support.go"
                }
              ]
            },
            "3": {
              "patterns": [
                {
                  "include": "#type-declarations-without-brackets"
                },
                {
                  "match": "\\[",
                  "name": "punctuation.definition.begin.bracket.square.go"
                },
                {
                  "match": "\\]",
                  "name": "punctuation.definition.end.bracket.square.go"
                },
                {
                  "match": "\\{",
                  "name": "punctuation.definition.begin.bracket.curly.go"
                },
                {
                  "match": "\\}",
                  "name": "punctuation.definition.end.bracket.curly.go"
                },
                {
                  "match": "\\w+",
                  "name": "entity.name.type.go"
                }
              ]
            }
          },
          "comment": "Support Functions",
          "match": "(?:(?:((?<=\\.)\\b\\w+)|(\\b\\w+))(\\[(?:(?:[\\w\\.\\*\\[\\]{}\"\\']+)(?:(?:\\,\\s*(?:[\\w\\.\\*\\[\\]{}]+))*))?\\])?(?=\\())"
        },
        "switch_select_case_variables": {
          "captures": {
            "1": {
              "name": "keyword.control.go"
            },
            "2": {
              "patterns": [
                {
                  "include": "#type-declarations"
                },
                {
                  "include": "#support_functions"
                },
                {
                  "include": "#variable_assignment"
                },
                {
                  "match": "\\w+",
                  "name": "variable.other.go"
                }
              ]
            }
          },
          "comment": "variables after case control keyword in switch/select expression, to not scope them as property variables",
          "match": "(?:(?:^\\s*(\\bcase\\b))(?:\\s+)([\\s\\S]+(?::)\\s*(?:/(?:/|\\*).*)?)$)"
        },
        "switch_types": {
          "begin": "(?<=\\bswitch\\b)(?:\\s*)(?:(\\w+\\s*:=)?\\s*([\\w\\.\\*()\\[\\]+/\\-\\%<>\\|\\&]+))(\\.\\(\\btype\\b\\)\\s*)(\\{)",
          "beginCaptures": {
            "1": {
              "patterns": [
                {
                  "include": "#operators"
                },
                {
                  "match": "\\w+",
                  "name": "variable.other.assignment.go"
                }
              ]
            },
            "2": {
              "patterns": [
                {
                  "include": "#support_functions"
                },
                {
                  "include": "#type-declarations"
                },
                {
                  "match": "\\w+",
                  "name": "variable.other.go"
                }
              ]
            },
            "3": {
              "patterns": [
                {
                  "include": "#delimiters"
                },
                {
                  "include": "#brackets"
                },
                {
                  "match": "\\btype\\b",
                  "name": "keyword.type.go"
                }
              ]
            },
            "4": {
              "name": "punctuation.definition.begin.bracket.curly.go"
            }
          },
          "comment": "switch type assertions, only highlights types after case keyword",
          "end": "(?:\\})",
          "endCaptures": {
            "0": {
              "name": "punctuation.definition.end.bracket.curly.go"
            }
          },
          "patterns": [
            {
              "captures": {
                "1": {
                  "name": "keyword.control.go"
                },
                "2": {
                  "patterns": [
                    {
                      "include": "#type-declarations"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.other.colon.go"
                },
                "4": {
                  "patterns": [
                    {
                      "include": "#comments"
                    }
                  ]
                }
              },
              "comment": "types after case keyword with single line",
              "match": "(?:^\\s*(\\bcase\\b))(?:\\s+)([\\w\\.\\,\\*=<>!\\s]+)(:)(\\s*/(?:/|\\*)\\s*.*)?$"
            },
            {
              "begin": "\\bcase\\b",
              "beginCaptures": {
                "0": {
                  "name": "keyword.control.go"
                }
              },
              "comment": "types after case keyword with multi lines",
              "end": ":",
              "endCaptures": {
                "0": {
                  "name": "punctuation.other.colon.go"
                }
              },
              "patterns": [
                {
                  "include": "#type-declarations"
                },
                {
                  "match": "\\w+",
                  "name": "entity.name.type.go"
                }
              ]
            },
            {
              "include": "$self"
            }
          ]
        },
        "syntax_errors": {
          "patterns": [
            {
              "captures": {
                "1": {
                  "name": "invalid.illegal.slice.go"
                }
              },
              "comment": "Syntax error using slices",
              "match": "\\[\\](\\s+)"
            },
            {
              "comment": "Syntax error numeric literals",
              "match": "\\b0[0-7]*[89]\\d*\\b",
              "name": "invalid.illegal.numeric.go"
            }
          ]
        },
        "terminators": {
          "comment": "Terminators",
          "match": ";",
          "name": "punctuation.terminator.go"
        },
        "type-declarations": {
          "comment": "includes all type declarations",
          "patterns": [
            {
              "include": "#language_constants"
            },
            {
              "include": "#comments"
            },
            {
              "include": "#map_types"
            },
            {
              "include": "#brackets"
            },
            {
              "include": "#delimiters"
            },
            {
              "include": "#keywords"
            },
            {
              "include": "#operators"
            },
            {
              "include": "#runes"
            },
            {
              "include": "#storage_types"
            },
            {
              "include": "#raw_string_literals"
            },
            {
              "include": "#string_literals"
            },
            {
              "include": "#numeric_literals"
            },
            {
              "include": "#terminators"
            }
          ]
        },
        "type-declarations-without-brackets": {
          "comment": "includes all type declarations without brackets (in some cases, brackets need to be captured manually)",
          "patterns": [
            {
              "include": "#language_constants"
            },
            {
              "include": "#comments"
            },
            {
              "include": "#map_types"
            },
            {
              "include": "#delimiters"
            },
            {
              "include": "#keywords"
            },
            {
              "include": "#operators"
            },
            {
              "include": "#runes"
            },
            {
              "include": "#storage_types"
            },
            {
              "include": "#raw_string_literals"
            },
            {
              "include": "#string_literals"
            },
            {
              "include": "#numeric_literals"
            },
            {
              "include": "#terminators"
            }
          ]
        },
        "type_assertion_inline": {
          "captures": {
            "1": {
              "name": "keyword.type.go"
            },
            "2": {
              "patterns": [
                {
                  "include": "#type-declarations"
                },
                {
                  "match": "(?:\\w+)",
                  "name": "entity.name.type.go"
                }
              ]
            }
          },
          "comment": "struct/interface types in-line (type assertion) | switch type keyword",
          "match": "(?:(?<=\\.\\()(?:(\\btype\\b)|((?:(?:\\s*(?:[\\*\\[\\]]+)?(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+)?[\\w\\.\\[\\]\\*]+))(?=\\)))"
        },
        "var_const_assignment": {
          "comment": "variable assignment with var and const keyword",
          "patterns": [
            {
              "captures": {
                "1": {
                  "patterns": [
                    {
                      "include": "#delimiters"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.other.assignment.go"
                    }
                  ]
                },
                "2": {
                  "patterns": [
                    {
                      "include": "#type-declarations-without-brackets"
                    },
                    {
                      "include": "#generic_types"
                    },
                    {
                      "match": "\\(",
                      "name": "punctuation.definition.begin.bracket.round.go"
                    },
                    {
                      "match": "\\)",
                      "name": "punctuation.definition.end.bracket.round.go"
                    },
                    {
                      "match": "\\[",
                      "name": "punctuation.definition.begin.bracket.square.go"
                    },
                    {
                      "match": "\\]",
                      "name": "punctuation.definition.end.bracket.square.go"
                    },
                    {
                      "match": "\\w+",
                      "name": "entity.name.type.go"
                    }
                  ]
                }
              },
              "comment": "var and const with single type assignment",
              "match": "(?:(?<=\\bvar\\b|\\bconst\\b)(?:\\s*)(\\b[\\w\\.]+(?:\\,\\s*[\\w\\.]+)*)(?:\\s*)((?:(?:(?:[\\*\\[\\]]+)?(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+(?:\\([^)]+\\))?)?(?!(?:[\\[\\]\\*]+)?\\b(?:struct|func|map)\\b)(?:[\\w\\.\\[\\]\\*]+(?:\\,\\s*[\\w\\.\\[\\]\\*]+)*)?(?:\\s*)(?:=)?)?)"
            },
            {
              "begin": "(?:(?<=\\bvar\\b|\\bconst\\b)(?:\\s*)(\\())",
              "beginCaptures": {
                "1": {
                  "name": "punctuation.definition.begin.bracket.round.go"
                }
              },
              "comment": "var and const with multi type assignment",
              "end": "\\)",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.end.bracket.round.go"
                }
              },
              "patterns": [
                {
                  "captures": {
                    "1": {
                      "patterns": [
                        {
                          "include": "#delimiters"
                        },
                        {
                          "match": "\\w+",
                          "name": "variable.other.assignment.go"
                        }
                      ]
                    },
                    "2": {
                      "patterns": [
                        {
                          "include": "#type-declarations-without-brackets"
                        },
                        {
                          "include": "#generic_types"
                        },
                        {
                          "match": "\\(",
                          "name": "punctuation.definition.begin.bracket.round.go"
                        },
                        {
                          "match": "\\)",
                          "name": "punctuation.definition.end.bracket.round.go"
                        },
                        {
                          "match": "\\[",
                          "name": "punctuation.definition.begin.bracket.square.go"
                        },
                        {
                          "match": "\\]",
                          "name": "punctuation.definition.end.bracket.square.go"
                        },
                        {
                          "match": "\\w+",
                          "name": "entity.name.type.go"
                        }
                      ]
                    }
                  },
                  "match": "(?:(?:^\\s*)(\\b[\\w\\.]+(?:\\,\\s*[\\w\\.]+)*)(?:\\s*)((?:(?:(?:[\\*\\[\\]]+)?(?:<-\\s*)?\\bchan\\b(?:\\s*<-)?\\s*)+(?:\\([^)]+\\))?)?(?!(?:[\\[\\]\\*]+)?\\b(?:struct|func|map)\\b)(?:[\\w\\.\\[\\]\\*]+(?:\\,\\s*[\\w\\.\\[\\]\\*]+)*)?(?:\\s*)(?:=)?)?)"
                },
                {
                  "include": "$self"
                }
              ]
            }
          ]
        },
        "variable_assignment": {
          "comment": "variable assignment",
          "patterns": [
            {
              "captures": {
                "0": {
                  "patterns": [
                    {
                      "include": "#delimiters"
                    },
                    {
                      "match": "\\d\\w*",
                      "name": "invalid.illegal.identifier.go"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.other.assignment.go"
                    }
                  ]
                }
              },
              "comment": "variable assignment with :=",
              "match": "\\b\\w+(?:\\,\\s*\\w+)*(?=\\s*:=)"
            },
            {
              "captures": {
                "0": {
                  "patterns": [
                    {
                      "include": "#delimiters"
                    },
                    {
                      "include": "#operators"
                    },
                    {
                      "match": "\\d\\w*",
                      "name": "invalid.illegal.identifier.go"
                    },
                    {
                      "match": "\\w+",
                      "name": "variable.other.assignment.go"
                    }
                  ]
                }
              },
              "comment": "variable assignment with =",
              "match": "\\b[\\w\\.\\*]+(?:\\,\\s*[\\w\\.\\*]+)*(?=\\s*=(?!=))"
            }
          ]
        }
      },
      "scopeName": "source.go"
    },
    "rust": {
      "displayName": "Rust",
      "name": "rust",
      "patterns": [
        {
          "begin": "(<)(\\[)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.brackets.angle.rust"
            },
            "2": {
              "name": "punctuation.brackets.square.rust"
            }
          },
          "comment": "boxed slice literal",
          "end": ">",
          "endCaptures": {
            "0": {
              "name": "punctuation.brackets.angle.rust"
            }
          },
          "patterns": [
            {
              "include": "#block-comments"
            },
            {
              "include": "#comments"
            },
            {
              "include": "#gtypes"
            },
            {
              "include": "#lvariables"
            },
            {
              "include": "#lifetimes"
            },
            {
              "include": "#punctuation"
            },
            {
              "include": "#types"
            }
          ]
        },
        {
          "captures": {
            "1": {
              "name": "keyword.operator.macro.dollar.rust"
            },
            "3": {
              "name": "keyword.other.crate.rust"
            },
            "4": {
              "name": "entity.name.type.metavariable.rust"
            },
            "6": {
              "name": "keyword.operator.key-value.rust"
            },
            "7": {
              "name": "variable.other.metavariable.specifier.rust"
            }
          },
          "comment": "macro type metavariables",
          "match": "(\\$)((crate)|([A-Z][A-Za-z0-9_]*))((:)(block|expr|ident|item|lifetime|literal|meta|path?|stmt|tt|ty|vis))?",
          "name": "meta.macro.metavariable.type.rust",
          "patterns": [
            {
              "include": "#keywords"
            }
          ]
        },
        {
          "captures": {
            "1": {
              "name": "keyword.operator.macro.dollar.rust"
            },
            "2": {
              "name": "variable.other.metavariable.name.rust"
            },
            "4": {
              "name": "keyword.operator.key-value.rust"
            },
            "5": {
              "name": "variable.other.metavariable.specifier.rust"
            }
          },
          "comment": "macro metavariables",
          "match": "(\\$)([a-z][A-Za-z0-9_]*)((:)(block|expr|ident|item|lifetime|literal|meta|path?|stmt|tt|ty|vis))?",
          "name": "meta.macro.metavariable.rust",
          "patterns": [
            {
              "include": "#keywords"
            }
          ]
        },
        {
          "captures": {
            "1": {
              "name": "entity.name.function.macro.rules.rust"
            },
            "3": {
              "name": "entity.name.function.macro.rust"
            },
            "4": {
              "name": "entity.name.type.macro.rust"
            },
            "5": {
              "name": "punctuation.brackets.curly.rust"
            }
          },
          "comment": "macro rules",
          "match": "\\b(macro_rules!)\\s+(([a-z0-9_]+)|([A-Z][a-z0-9_]*))\\s+(\\{)",
          "name": "meta.macro.rules.rust"
        },
        {
          "captures": {
            "1": {
              "name": "storage.type.rust"
            },
            "2": {
              "name": "entity.name.module.rust"
            }
          },
          "comment": "modules",
          "match": "(mod)\\s+((?:r#(?!crate|[Ss]elf|super))?[a-z][A-Za-z0-9_]*)"
        },
        {
          "begin": "\\b(extern)\\s+(crate)",
          "beginCaptures": {
            "1": {
              "name": "storage.type.rust"
            },
            "2": {
              "name": "keyword.other.crate.rust"
            }
          },
          "comment": "external crate imports",
          "end": ";",
          "endCaptures": {
            "0": {
              "name": "punctuation.semi.rust"
            }
          },
          "name": "meta.import.rust",
          "patterns": [
            {
              "include": "#block-comments"
            },
            {
              "include": "#comments"
            },
            {
              "include": "#keywords"
            },
            {
              "include": "#punctuation"
            }
          ]
        },
        {
          "begin": "\\b(use)\\s",
          "beginCaptures": {
            "1": {
              "name": "keyword.other.rust"
            }
          },
          "comment": "use statements",
          "end": ";",
          "endCaptures": {
            "0": {
              "name": "punctuation.semi.rust"
            }
          },
          "name": "meta.use.rust",
          "patterns": [
            {
              "include": "#block-comments"
            },
            {
              "include": "#comments"
            },
            {
              "include": "#keywords"
            },
            {
              "include": "#namespaces"
            },
            {
              "include": "#punctuation"
            },
            {
              "include": "#types"
            },
            {
              "include": "#lvariables"
            }
          ]
        },
        {
          "include": "#block-comments"
        },
        {
          "include": "#comments"
        },
        {
          "include": "#attributes"
        },
        {
          "include": "#lvariables"
        },
        {
          "include": "#constants"
        },
        {
          "include": "#gtypes"
        },
        {
          "include": "#functions"
        },
        {
          "include": "#types"
        },
        {
          "include": "#keywords"
        },
        {
          "include": "#lifetimes"
        },
        {
          "include": "#macros"
        },
        {
          "include": "#namespaces"
        },
        {
          "include": "#punctuation"
        },
        {
          "include": "#strings"
        },
        {
          "include": "#variables"
        }
      ],
      "repository": {
        "attributes": {
          "begin": "(#)(!?)(\\[)",
          "beginCaptures": {
            "1": {
              "name": "punctuation.definition.attribute.rust"
            },
            "3": {
              "name": "punctuation.brackets.attribute.rust"
            }
          },
          "comment": "attributes",
          "end": "\\]",
          "endCaptures": {
            "0": {
              "name": "punctuation.brackets.attribute.rust"
            }
          },
          "name": "meta.attribute.rust",
          "patterns": [
            {
              "include": "#block-comments"
            },
            {
              "include": "#comments"
            },
            {
              "include": "#keywords"
            },
            {
              "include": "#lifetimes"
            },
            {
              "include": "#punctuation"
            },
            {
              "include": "#strings"
            },
            {
              "include": "#gtypes"
            },
            {
              "include": "#types"
            }
          ]
        },
        "block-comments": {
          "patterns": [
            {
              "comment": "empty block comments",
              "match": "/\\*\\*/",
              "name": "comment.block.rust"
            },
            {
              "begin": "/\\*\\*",
              "comment": "block documentation comments",
              "end": "\\*/",
              "name": "comment.block.documentation.rust",
              "patterns": [
                {
                  "include": "#block-comments"
                }
              ]
            },
            {
              "begin": "/\\*(?!\\*)",
              "comment": "block comments",
              "end": "\\*/",
              "name": "comment.block.rust",
              "patterns": [
                {
                  "include": "#block-comments"
                }
              ]
            }
          ]
        },
        "comments": {
          "patterns": [
            {
              "captures": {
                "1": {
                  "name": "punctuation.definition.comment.rust"
                }
              },
              "comment": "documentation comments",
              "match": "(///).*$",
              "name": "comment.line.documentation.rust"
            },
            {
              "captures": {
                "1": {
                  "name": "punctuation.definition.comment.rust"
                }
              },
              "comment": "line comments",
              "match": "(//).*$",
              "name": "comment.line.double-slash.rust"
            }
          ]
        },
        "constants": {
          "patterns": [
            {
              "comment": "ALL CAPS constants",
              "match": "\\b[A-Z]{2}[A-Z0-9_]*\\b",
              "name": "constant.other.caps.rust"
            },
            {
              "captures": {
                "1": {
                  "name": "storage.type.rust"
                },
                "2": {
                  "name": "constant.other.caps.rust"
                }
              },
              "comment": "constant declarations",
              "match": "\\b(const)\\s+([A-Z][A-Za-z0-9_]*)\\b"
            },
            {
              "captures": {
                "1": {
                  "name": "punctuation.separator.dot.decimal.rust"
                },
                "2": {
                  "name": "keyword.operator.exponent.rust"
                },
                "3": {
                  "name": "keyword.operator.exponent.sign.rust"
                },
                "4": {
                  "name": "constant.numeric.decimal.exponent.mantissa.rust"
                },
                "5": {
                  "name": "entity.name.type.numeric.rust"
                }
              },
              "comment": "decimal integers and floats",
              "match": "\\b\\d[\\d_]*(\\.?)[\\d_]*(?:(E|e)([+-]?)([\\d_]+))?(f32|f64|i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?\\b",
              "name": "constant.numeric.decimal.rust"
            },
            {
              "captures": {
                "1": {
                  "name": "entity.name.type.numeric.rust"
                }
              },
              "comment": "hexadecimal integers",
              "match": "\\b0x[\\da-fA-F_]+(i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?\\b",
              "name": "constant.numeric.hex.rust"
            },
            {
              "captures": {
                "1": {
                  "name": "entity.name.type.numeric.rust"
                }
              },
              "comment": "octal integers",
              "match": "\\b0o[0-7_]+(i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?\\b",
              "name": "constant.numeric.oct.rust"
            },
            {
              "captures": {
                "1": {
                  "name": "entity.name.type.numeric.rust"
                }
              },
              "comment": "binary integers",
              "match": "\\b0b[01_]+(i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)?\\b",
              "name": "constant.numeric.bin.rust"
            },
            {
              "comment": "booleans",
              "match": "\\b(true|false)\\b",
              "name": "constant.language.bool.rust"
            }
          ]
        },
        "escapes": {
          "captures": {
            "1": {
              "name": "constant.character.escape.backslash.rust"
            },
            "2": {
              "name": "constant.character.escape.bit.rust"
            },
            "3": {
              "name": "constant.character.escape.unicode.rust"
            },
            "4": {
              "name": "constant.character.escape.unicode.punctuation.rust"
            },
            "5": {
              "name": "constant.character.escape.unicode.punctuation.rust"
            }
          },
          "comment": "escapes: ASCII, byte, Unicode, quote, regex",
          "match": "(\\\\)(?:(?:(x[0-7][\\da-fA-F])|(u(\\{)[\\da-fA-F]{4,6}(\\}))|.))",
          "name": "constant.character.escape.rust"
        },
        "functions": {
          "patterns": [
            {
              "captures": {
                "1": {
                  "name": "keyword.other.rust"
                },
                "2": {
                  "name": "punctuation.brackets.round.rust"
                }
              },
              "comment": "pub as a function",
              "match": "\\b(pub)(\\()"
            },
            {
              "begin": "\\b(fn)\\s+((?:r#(?!crate|[Ss]elf|super))?[A-Za-z0-9_]+)((\\()|(<))",
              "beginCaptures": {
                "1": {
                  "name": "keyword.other.fn.rust"
                },
                "2": {
                  "name": "entity.name.function.rust"
                },
                "4": {
                  "name": "punctuation.brackets.round.rust"
                },
                "5": {
                  "name": "punctuation.brackets.angle.rust"
                }
              },
              "comment": "function definition",
              "end": "(\\{)|(;)",
              "endCaptures": {
                "1": {
                  "name": "punctuation.brackets.curly.rust"
                },
                "2": {
                  "name": "punctuation.semi.rust"
                }
              },
              "name": "meta.function.definition.rust",
              "patterns": [
                {
                  "include": "#block-comments"
                },
                {
                  "include": "#comments"
                },
                {
                  "include": "#keywords"
                },
                {
                  "include": "#lvariables"
                },
                {
                  "include": "#constants"
                },
                {
                  "include": "#gtypes"
                },
                {
                  "include": "#functions"
                },
                {
                  "include": "#lifetimes"
                },
                {
                  "include": "#macros"
                },
                {
                  "include": "#namespaces"
                },
                {
                  "include": "#punctuation"
                },
                {
                  "include": "#strings"
                },
                {
                  "include": "#types"
                },
                {
                  "include": "#variables"
                }
              ]
            },
            {
              "begin": "((?:r#(?!crate|[Ss]elf|super))?[A-Za-z0-9_]+)(\\()",
              "beginCaptures": {
                "1": {
                  "name": "entity.name.function.rust"
                },
                "2": {
                  "name": "punctuation.brackets.round.rust"
                }
              },
              "comment": "function/method calls, chaining",
              "end": "\\)",
              "endCaptures": {
                "0": {
                  "name": "punctuation.brackets.round.rust"
                }
              },
              "name": "meta.function.call.rust",
              "patterns": [
                {
                  "include": "#block-comments"
                },
                {
                  "include": "#comments"
                },
                {
                  "include": "#attributes"
                },
                {
                  "include": "#keywords"
                },
                {
                  "include": "#lvariables"
                },
                {
                  "include": "#constants"
                },
                {
                  "include": "#gtypes"
                },
                {
                  "include": "#functions"
                },
                {
                  "include": "#lifetimes"
                },
                {
                  "include": "#macros"
                },
                {
                  "include": "#namespaces"
                },
                {
                  "include": "#punctuation"
                },
                {
                  "include": "#strings"
                },
                {
                  "include": "#types"
                },
                {
                  "include": "#variables"
                }
              ]
            },
            {
              "begin": "((?:r#(?!crate|[Ss]elf|super))?[A-Za-z0-9_]+)(?=::<.*>\\()",
              "beginCaptures": {
                "1": {
                  "name": "entity.name.function.rust"
                }
              },
              "comment": "function/method calls with turbofish",
              "end": "\\)",
              "endCaptures": {
                "0": {
                  "name": "punctuation.brackets.round.rust"
                }
              },
              "name": "meta.function.call.rust",
              "patterns": [
                {
                  "include": "#block-comments"
                },
                {
                  "include": "#comments"
                },
                {
                  "include": "#attributes"
                },
                {
                  "include": "#keywords"
                },
                {
                  "include": "#lvariables"
                },
                {
                  "include": "#constants"
                },
                {
                  "include": "#gtypes"
                },
                {
                  "include": "#functions"
                },
                {
                  "include": "#lifetimes"
                },
                {
                  "include": "#macros"
                },
                {
                  "include": "#namespaces"
                },
                {
                  "include": "#punctuation"
                },
                {
                  "include": "#strings"
                },
                {
                  "include": "#types"
                },
                {
                  "include": "#variables"
                }
              ]
            }
          ]
        },
        "gtypes": {
          "patterns": [
            {
              "comment": "option types",
              "match": "\\b(Some|None)\\b",
              "name": "entity.name.type.option.rust"
            },
            {
              "comment": "result types",
              "match": "\\b(Ok|Err)\\b",
              "name": "entity.name.type.result.rust"
            }
          ]
        },
        "interpolations": {
          "captures": {
            "1": {
              "name": "punctuation.definition.interpolation.rust"
            },
            "2": {
              "name": "punctuation.definition.interpolation.rust"
            }
          },
          "comment": "curly brace interpolations",
          "match": "({)[^\"{}]*(})",
          "name": "meta.interpolation.rust"
        },
        "keywords": {
          "patterns": [
            {
              "comment": "control flow keywords",
              "match": "\\b(await|break|continue|do|else|for|if|loop|match|return|try|while|yield)\\b",
              "name": "keyword.control.rust"
            },
            {
              "comment": "storage keywords",
              "match": "\\b(extern|let|macro|mod)\\b",
              "name": "keyword.other.rust storage.type.rust"
            },
            {
              "comment": "const keyword",
              "match": "\\b(const)\\b",
              "name": "storage.modifier.rust"
            },
            {
              "comment": "type keyword",
              "match": "\\b(type)\\b",
              "name": "keyword.declaration.type.rust storage.type.rust"
            },
            {
              "comment": "enum keyword",
              "match": "\\b(enum)\\b",
              "name": "keyword.declaration.enum.rust storage.type.rust"
            },
            {
              "comment": "trait keyword",
              "match": "\\b(trait)\\b",
              "name": "keyword.declaration.trait.rust storage.type.rust"
            },
            {
              "comment": "struct keyword",
              "match": "\\b(struct)\\b",
              "name": "keyword.declaration.struct.rust storage.type.rust"
            },
            {
              "comment": "storage modifiers",
              "match": "\\b(abstract|static)\\b",
              "name": "storage.modifier.rust"
            },
            {
              "comment": "other keywords",
              "match": "\\b(as|async|become|box|dyn|move|final|gen|impl|in|override|priv|pub|ref|typeof|union|unsafe|unsized|use|virtual|where)\\b",
              "name": "keyword.other.rust"
            },
            {
              "comment": "fn",
              "match": "\\bfn\\b",
              "name": "keyword.other.fn.rust"
            },
            {
              "comment": "crate",
              "match": "\\bcrate\\b",
              "name": "keyword.other.crate.rust"
            },
            {
              "comment": "mut",
              "match": "\\bmut\\b",
              "name": "storage.modifier.mut.rust"
            },
            {
              "comment": "logical operators",
              "match": "(\\^|\\||\\|\\||&&|<<|>>|!)(?!=)",
              "name": "keyword.operator.logical.rust"
            },
            {
              "comment": "logical AND, borrow references",
              "match": "&(?![&=])",
              "name": "keyword.operator.borrow.and.rust"
            },
            {
              "comment": "assignment operators",
              "match": "(\\+=|-=|\\*=|/=|%=|\\^=|&=|\\|=|<<=|>>=)",
              "name": "keyword.operator.assignment.rust"
            },
            {
              "comment": "single equal",
              "match": "(?<![<>])=(?!=|>)",
              "name": "keyword.operator.assignment.equal.rust"
            },
            {
              "comment": "comparison operators",
              "match": "(=(=)?(?!>)|!=|<=|(?<!=)>=)",
              "name": "keyword.operator.comparison.rust"
            },
            {
              "comment": "math operators",
              "match": "(([+%]|(\\*(?!\\w)))(?!=))|(-(?!>))|(/(?!/))",
              "name": "keyword.operator.math.rust"
            },
            {
              "captures": {
                "1": {
                  "name": "punctuation.brackets.round.rust"
                },
                "2": {
                  "name": "punctuation.brackets.square.rust"
                },
                "3": {
                  "name": "punctuation.brackets.curly.rust"
                },
                "4": {
                  "name": "keyword.operator.comparison.rust"
                },
                "5": {
                  "name": "punctuation.brackets.round.rust"
                },
                "6": {
                  "name": "punctuation.brackets.square.rust"
                },
                "7": {
                  "name": "punctuation.brackets.curly.rust"
                }
              },
              "comment": "less than, greater than (special case)",
              "match": "(?:\\b|(?:(\\))|(\\])|(\\})))[ \\t]+([<>])[ \\t]+(?:\\b|(?:(\\()|(\\[)|(\\{)))"
            },
            {
              "comment": "namespace operator",
              "match": "::",
              "name": "keyword.operator.namespace.rust"
            },
            {
              "captures": {
                "1": {
                  "name": "keyword.operator.dereference.rust"
                }
              },
              "comment": "dereference asterisk",
              "match": "(\\*)(?=\\w+)"
            },
            {
              "comment": "subpattern binding",
              "match": "@",
              "name": "keyword.operator.subpattern.rust"
            },
            {
              "comment": "dot access",
              "match": "\\.(?!\\.)",
              "name": "keyword.operator.access.dot.rust"
            },
            {
              "comment": "ranges, range patterns",
              "match": "\\.{2}(=|\\.)?",
              "name": "keyword.operator.range.rust"
            },
            {
              "comment": "colon",
              "match": ":(?!:)",
              "name": "keyword.operator.key-value.rust"
            },
            {
              "comment": "dashrocket, skinny arrow",
              "match": "->|<-",
              "name": "keyword.operator.arrow.skinny.rust"
            },
            {
              "comment": "hashrocket, fat arrow",
              "match": "=>",
              "name": "keyword.operator.arrow.fat.rust"
            },
            {
              "comment": "dollar macros",
              "match": "\\$",
              "name": "keyword.operator.macro.dollar.rust"
            },
            {
              "comment": "question mark operator, questionably sized, macro kleene matcher",
              "match": "\\?",
              "name": "keyword.operator.question.rust"
            }
          ]
        },
        "lifetimes": {
          "patterns": [
            {
              "captures": {
                "1": {
                  "name": "punctuation.definition.lifetime.rust"
                },
                "2": {
                  "name": "entity.name.type.lifetime.rust"
                }
              },
              "comment": "named lifetime parameters",
              "match": "(['])([a-zA-Z_][0-9a-zA-Z_]*)(?!['])\\b"
            },
            {
              "captures": {
                "1": {
                  "name": "keyword.operator.borrow.rust"
                },
                "2": {
                  "name": "punctuation.definition.lifetime.rust"
                },
                "3": {
                  "name": "entity.name.type.lifetime.rust"
                }
              },
              "comment": "borrowing references to named lifetimes",
              "match": "(\\&)(['])([a-zA-Z_][0-9a-zA-Z_]*)(?!['])\\b"
            }
          ]
        },
        "lvariables": {
          "patterns": [
            {
              "comment": "self",
              "match": "\\b[Ss]elf\\b",
              "name": "variable.language.self.rust"
            },
            {
              "comment": "super",
              "match": "\\bsuper\\b",
              "name": "variable.language.super.rust"
            }
          ]
        },
        "macros": {
          "patterns": [
            {
              "captures": {
                "2": {
                  "name": "entity.name.function.macro.rust"
                },
                "3": {
                  "name": "entity.name.type.macro.rust"
                }
              },
              "comment": "macros",
              "match": "(([a-z_][A-Za-z0-9_]*!)|([A-Z_][A-Za-z0-9_]*!))",
              "name": "meta.macro.rust"
            }
          ]
        },
        "namespaces": {
          "patterns": [
            {
              "captures": {
                "1": {
                  "name": "entity.name.namespace.rust"
                },
                "2": {
                  "name": "keyword.operator.namespace.rust"
                }
              },
              "comment": "namespace (non-type, non-function path segment)",
              "match": "(?<![A-Za-z0-9_])([A-Za-z0-9_]+)((?<!super|self)::)"
            }
          ]
        },
        "punctuation": {
          "patterns": [
            {
              "comment": "comma",
              "match": ",",
              "name": "punctuation.comma.rust"
            },
            {
              "comment": "curly braces",
              "match": "[{}]",
              "name": "punctuation.brackets.curly.rust"
            },
            {
              "comment": "parentheses, round brackets",
              "match": "[()]",
              "name": "punctuation.brackets.round.rust"
            },
            {
              "comment": "semicolon",
              "match": ";",
              "name": "punctuation.semi.rust"
            },
            {
              "comment": "square brackets",
              "match": "[\\[\\]]",
              "name": "punctuation.brackets.square.rust"
            },
            {
              "comment": "angle brackets",
              "match": "(?<!=)[<>]",
              "name": "punctuation.brackets.angle.rust"
            }
          ]
        },
        "strings": {
          "patterns": [
            {
              "begin": "(b?)(\")",
              "beginCaptures": {
                "1": {
                  "name": "string.quoted.byte.raw.rust"
                },
                "2": {
                  "name": "punctuation.definition.string.rust"
                }
              },
              "comment": "double-quoted strings and byte strings",
              "end": "\"",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.string.rust"
                }
              },
              "name": "string.quoted.double.rust",
              "patterns": [
                {
                  "include": "#escapes"
                },
                {
                  "include": "#interpolations"
                }
              ]
            },
            {
              "begin": "(b?r)(#*)(\")",
              "beginCaptures": {
                "1": {
                  "name": "string.quoted.byte.raw.rust"
                },
                "2": {
                  "name": "punctuation.definition.string.raw.rust"
                },
                "3": {
                  "name": "punctuation.definition.string.rust"
                }
              },
              "comment": "double-quoted raw strings and raw byte strings",
              "end": "(\")(\\2)",
              "endCaptures": {
                "1": {
                  "name": "punctuation.definition.string.rust"
                },
                "2": {
                  "name": "punctuation.definition.string.raw.rust"
                }
              },
              "name": "string.quoted.double.rust"
            },
            {
              "begin": "(b)?(')",
              "beginCaptures": {
                "1": {
                  "name": "string.quoted.byte.raw.rust"
                },
                "2": {
                  "name": "punctuation.definition.char.rust"
                }
              },
              "comment": "characters and bytes",
              "end": "'",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.char.rust"
                }
              },
              "name": "string.quoted.single.char.rust",
              "patterns": [
                {
                  "include": "#escapes"
                }
              ]
            }
          ]
        },
        "types": {
          "patterns": [
            {
              "captures": {
                "1": {
                  "name": "entity.name.type.numeric.rust"
                }
              },
              "comment": "numeric types",
              "match": "(?<![A-Za-z])(f32|f64|i128|i16|i32|i64|i8|isize|u128|u16|u32|u64|u8|usize)\\b"
            },
            {
              "begin": "\\b(_?[A-Z][A-Za-z0-9_]*)(<)",
              "beginCaptures": {
                "1": {
                  "name": "entity.name.type.rust"
                },
                "2": {
                  "name": "punctuation.brackets.angle.rust"
                }
              },
              "comment": "parameterized types",
              "end": ">",
              "endCaptures": {
                "0": {
                  "name": "punctuation.brackets.angle.rust"
                }
              },
              "patterns": [
                {
                  "include": "#block-comments"
                },
                {
                  "include": "#comments"
                },
                {
                  "include": "#keywords"
                },
                {
                  "include": "#lvariables"
                },
                {
                  "include": "#lifetimes"
                },
                {
                  "include": "#punctuation"
                },
                {
                  "include": "#types"
                },
                {
                  "include": "#variables"
                }
              ]
            },
            {
              "comment": "primitive types",
              "match": "\\b(bool|char|str)\\b",
              "name": "entity.name.type.primitive.rust"
            },
            {
              "captures": {
                "1": {
                  "name": "keyword.declaration.trait.rust storage.type.rust"
                },
                "2": {
                  "name": "entity.name.type.trait.rust"
                }
              },
              "comment": "trait declarations",
              "match": "\\b(trait)\\s+(_?[A-Z][A-Za-z0-9_]*)\\b"
            },
            {
              "captures": {
                "1": {
                  "name": "keyword.declaration.struct.rust storage.type.rust"
                },
                "2": {
                  "name": "entity.name.type.struct.rust"
                }
              },
              "comment": "struct declarations",
              "match": "\\b(struct)\\s+(_?[A-Z][A-Za-z0-9_]*)\\b"
            },
            {
              "captures": {
                "1": {
                  "name": "keyword.declaration.enum.rust storage.type.rust"
                },
                "2": {
                  "name": "entity.name.type.enum.rust"
                }
              },
              "comment": "enum declarations",
              "match": "\\b(enum)\\s+(_?[A-Z][A-Za-z0-9_]*)\\b"
            },
            {
              "captures": {
                "1": {
                  "name": "keyword.declaration.type.rust storage.type.rust"
                },
                "2": {
                  "name": "entity.name.type.declaration.rust"
                }
              },
              "comment": "type declarations",
              "match": "\\b(type)\\s+(_?[A-Z][A-Za-z0-9_]*)\\b"
            },
            {
              "comment": "types",
              "match": "\\b_?[A-Z][A-Za-z0-9_]*\\b(?!!)",
              "name": "entity.name.type.rust"
            }
          ]
        },
        "variables": {
          "patterns": [
            {
              "comment": "variables",
              "match": "\\b(?<!(?<!\\.)\\.)(?:r#(?!(crate|[Ss]elf|super)))?[a-z0-9_]+\\b",
              "name": "variable.other.rust"
            }
          ]
        }
      },
      "scopeName": "source.rust"
    }
  },
  "theme": {
    "light": {
      "colors": {
        "activityBar.activeBorder": "#1c6b48",
        "activityBar.background": "#ffffff",
        "activityBar.border": "#f0f0f0",
        "activityBar.foreground": "#393a34",
        "activityBar.inactiveForeground": "#393a3450",
        "activityBarBadge.background": "#4e4f47",
        "activityBarBadge.foreground": "#ffffff",
        "badge.background": "#393a3490",
        "badge.foreground": "#ffffff",
        "breadcrumb.activeSelectionForeground": "#22222218",
        "breadcrumb.background": "#f7f7f7",
        "breadcrumb.focusForeground": "#393a34",
        "breadcrumb.foreground": "#6a737d",
        "breadcrumbPicker.background": "#ffffff",
        "button.background": "#1c6b48",
        "button.foreground": "#ffffff",
        "button.hoverBackground": "#1c6b48",
        "checkbox.background": "#f7f7f7",
        "checkbox.border": "#d1d5da",
        "debugToolBar.background": "#ffffff",
        "descriptionForeground": "#393a3490",
        "diffEditor.insertedTextBackground": "#1c6b4830",
        "diffEditor.removedTextBackground": "#ab595940",
        "dropdown.background": "#ffffff",
        "dropdown.border": "#f0f0f0",
        "dropdown.foreground": "#393a34",
        "dropdown.listBackground": "#f7f7f7",
        "editor.background": "#ffffff",
        "editor.findMatchBackground": "#e6cc7744",
        "editor.findMatchHighlightBackground": "#e6cc7766",
        "editor.focusedStackFrameHighlightBackground": "#fff5b1",
        "editor.foldBackground": "#22222210",
        "editor.foreground": "#393a34",
        "editor.inactiveSelectionBackground": "#22222210",
        "editor.lineHighlightBackground": "#f7f7f7",
        "editor.selectionBackground": "#22222218",
        "editor.selectionHighlightBackground": "#22222210",
        "editor.stackFrameHighlightBackground": "#fffbdd",
        "editor.wordHighlightBackground": "#1c6b4805",
        "editor.wordHighlightStrongBackground": "#1c6b4810",
        "editorBracketHighlight.foreground1": "#2993a3",
        "editorBracketHighlight.foreground2": "#1e754f",
        "editorBracketHighlight.foreground3": "#a65e2b",
        "editorBracketHighlight.foreground4": "#a13865",
        "editorBracketHighlight.foreground5": "#bda437",
        "editorBracketHighlight.foreground6": "#296aa3",
        "editorBracketMatch.background": "#1c6b4820",
        "editorError.foreground": "#ab5959",
        "editorGroup.border": "#f0f0f0",
        "editorGroupHeader.tabsBackground": "#ffffff",
        "editorGroupHeader.tabsBorder": "#f0f0f0",
        "editorGutter.addedBackground": "#1e754f",
        "editorGutter.commentRangeForeground": "#393a3450",
        "editorGutter.deletedBackground": "#ab5959",
        "editorGutter.foldingControlForeground": "#393a3490",
        "editorGutter.modifiedBackground": "#296aa3",
        "editorHint.foreground": "#1e754f",
        "editorIndentGuide.activeBackground": "#00000030",
        "editorIndentGuide.background": "#00000015",
        "editorInfo.foreground": "#296aa3",
        "editorInlayHint.background": "#f7f7f7",
        "editorInlayHint.foreground": "#999999",
        "editorLineNumber.activeForeground": "#4e4f47",
        "editorLineNumber.foreground": "#393a3450",
        "editorOverviewRuler.border": "#fff",
        "editorStickyScroll.background": "#f7f7f7",
        "editorStickyScrollHover.background": "#f7f7f7",
        "editorWarning.foreground": "#a65e2b",
        "editorWhitespace.foreground": "#00000015",
        "editorWidget.background": "#ffffff",
        "errorForeground": "#ab5959",
        "focusBorder": "#00000000",
        "foreground": "#393a34",
        "gitDecoration.addedResourceForeground": "#1e754f",
        "gitDecoration.conflictingResourceForeground": "#a65e2b",
        "gitDecoration.deletedResourceForeground": "#ab5959",
        "gitDecoration.ignoredResourceForeground": "#393a3450",
        "gitDecoration.modifiedResourceForeground": "#296aa3",
        "gitDecoration.submoduleResourceForeground": "#393a3490",
        "gitDecoration.untrackedResourceForeground": "#2993a3",
        "input.background": "#f7f7f7",
        "input.border": "#f0f0f0",
        "input.foreground": "#393a34",
        "input.placeholderForeground": "#393a3490",
        "inputOption.activeBackground": "#393a3450",
        "list.activeSelectionBackground": "#f7f7f7",
        "list.activeSelectionForeground": "#393a34",
        "list.focusBackground": "#f7f7f7",
        "list.highlightForeground": "#1c6b48",
        "list.hoverBackground": "#f7f7f7",
        "list.hoverForeground": "#393a34",
        "list.inactiveFocusBackground": "#ffffff",
        "list.inactiveSelectionBackground": "#f7f7f7",
        "list.inactiveSelectionForeground": "#393a34",
        "menu.separatorBackground": "#f0f0f0",
        "notificationCenterHeader.background": "#ffffff",
        "notificationCenterHeader.foreground": "#6a737d",
        "notifications.background": "#ffffff",
        "notifications.border": "#f0f0f0",
        "notifications.foreground": "#393a34",
        "notificationsErrorIcon.foreground": "#ab5959",
        "notificationsInfoIcon.foreground": "#296aa3",
        "notificationsWarningIcon.foreground": "#a65e2b",
        "panel.background": "#ffffff",
        "panel.border": "#f0f0f0",
        "panelInput.border": "#e1e4e8",
        "panelTitle.activeBorder": "#1c6b48",
        "panelTitle.activeForeground": "#393a34",
        "panelTitle.inactiveForeground": "#6a737d",
        "peekViewEditor.background": "#ffffff",
        "peekViewResult.background": "#ffffff",
        "pickerGroup.border": "#f0f0f0",
        "pickerGroup.foreground": "#393a34",
        "problemsErrorIcon.foreground": "#ab5959",
        "problemsInfoIcon.foreground": "#296aa3",
        "problemsWarningIcon.foreground": "#a65e2b",
        "progressBar.background": "#1c6b48",
        "quickInput.background": "#ffffff",
        "quickInput.foreground": "#393a34",
        "quickInputList.focusBackground": "#f7f7f7",
        "scrollbar.shadow": "#6a737d33",
        "scrollbarSlider.activeBackground": "#393a3450",
        "scrollbarSlider.background": "#393a3410",
        "scrollbarSlider.hoverBackground": "#393a3450",
        "settings.headerForeground": "#393a34",
        "settings.modifiedItemIndicator": "#1c6b48",
        "sideBar.background": "#ffffff",
        "sideBar.border": "#f0f0f0",
        "sideBar.foreground": "#4e4f47",
        "sideBarSectionHeader.background": "#ffffff",
        "sideBarSectionHeader.border": "#f0f0f0",
        "sideBarSectionHeader.foreground": "#393a34",
        "sideBarTitle.foreground": "#393a34",
        "statusBar.background": "#ffffff",
        "statusBar.border": "#f0f0f0",
        "statusBar.debuggingBackground": "#f7f7f7",
        "statusBar.debuggingForeground": "#4e4f47",
        "statusBar.foreground": "#4e4f47",
        "statusBar.noFolderBackground": "#ffffff",
        "statusBarItem.prominentBackground": "#f7f7f7",
        "tab.activeBackground": "#ffffff",
        "tab.activeBorder": "#f0f0f0",
        "tab.activeBorderTop": "#393a3490",
        "tab.activeForeground": "#393a34",
        "tab.border": "#f0f0f0",
        "tab.hoverBackground": "#f7f7f7",
        "tab.inactiveBackground": "#ffffff",
        "tab.inactiveForeground": "#6a737d",
        "tab.unfocusedActiveBorder": "#f0f0f0",
        "tab.unfocusedActiveBorderTop": "#f0f0f0",
        "tab.unfocusedHoverBackground": "#ffffff",
        "terminal.ansiBlack": "#121212",
        "terminal.ansiBlue": "#296aa3",
        "terminal.ansiBrightBlack": "#aaaaaa",
        "terminal.ansiBrightBlue": "#296aa3",
        "terminal.ansiBrightCyan": "#2993a3",
        "terminal.ansiBrightGreen": "#1e754f",
        "terminal.ansiBrightMagenta": "#a13865",
        "terminal.ansiBrightRed": "#ab5959",
        "terminal.ansiBrightWhite": "#dddddd",
        "terminal.ansiBrightYellow": "#bda437",
        "terminal.ansiCyan": "#2993a3",
        "terminal.ansiGreen": "#1e754f",
        "terminal.ansiMagenta": "#a13865",
        "terminal.ansiRed": "#ab5959",
        "terminal.ansiWhite": "#dbd7ca",
        "terminal.ansiYellow": "#bda437",
        "terminal.foreground": "#393a34",
        "terminal.selectionBackground": "#22222218",
        "textBlockQuote.background": "#ffffff",
        "textBlockQuote.border": "#f0f0f0",
        "textCodeBlock.background": "#ffffff",
        "textLink.activeForeground": "#1c6b48",
        "textLink.foreground": "#1c6b48",
        "textPreformat.foreground": "#586069",
        "textSeparator.foreground": "#d1d5da",
        "titleBar.activeBackground": "#ffffff",
        "titleBar.activeForeground": "#4e4f47",
        "titleBar.border": "#f7f7f7",
        "titleBar.inactiveBackground": "#ffffff",
        "titleBar.inactiveForeground": "#6a737d",
        "tree.indentGuidesStroke": "#e1e4e8",
        "welcomePage.buttonBackground": "#f6f8fa",
        "welcomePage.buttonHoverBackground": "#e1e4e8"
      },
      "displayName": "Vitesse Light",
      "name": "vitesse-light",
      "semanticHighlighting": true,
      "semanticTokenColors": {
        "class": "#5a6aa6",
        "interface": "#2e808f",
        "namespace": "#b05a78",
        "property": "#998418",
        "type": "#2e808f"
      },
      "tokenColors": [
        {
          "scope": [
            "comment",
            "punctuation.definition.comment",
            "string.comment"
          ],
          "settings": {
            "foreground": "#a0ada0"
          }
        },
        {
          "scope": [
            "delimiter.bracket",
            "delimiter",
            "invalid.illegal.character-not-allowed-here.html",
            "keyword.operator.rest",
            "keyword.operator.spread",
            "keyword.operator.type.annotation",
            "keyword.operator.relational",
            "keyword.operator.assignment",
            "keyword.operator.type",
            "meta.brace",
            "meta.tag.block.any.html",
            "meta.tag.inline.any.html",
            "meta.tag.structure.input.void.html",
            "meta.type.annotation",
            "meta.embedded.block.github-actions-expression",
            "storage.type.function.arrow",
            "meta.objectliteral.ts",
            "punctuation",
            "punctuation.definition.string.begin.html.vue",
            "punctuation.definition.string.end.html.vue"
          ],
          "settings": {
            "foreground": "#999999"
          }
        },
        {
          "scope": [
            "constant",
            "entity.name.constant",
            "variable.language",
            "meta.definition.variable"
          ],
          "settings": {
            "foreground": "#a65e2b"
          }
        },
        {
          "scope": [
            "entity",
            "entity.name"
          ],
          "settings": {
            "foreground": "#59873a"
          }
        },
        {
          "scope": "variable.parameter.function",
          "settings": {
            "foreground": "#393a34"
          }
        },
        {
          "scope": [
            "entity.name.tag",
            "tag.html"
          ],
          "settings": {
            "foreground": "#1e754f"
          }
        },
        {
          "scope": "entity.name.function",
          "settings": {
            "foreground": "#59873a"
          }
        },
        {
          "scope": [
            "keyword",
            "storage.type.class.jsdoc",
            "punctuation.definition.template-expression"
          ],
          "settings": {
            "foreground": "#1e754f"
          }
        },
        {
          "scope": [
            "storage",
            "storage.type",
            "support.type.builtin",
            "constant.language.undefined",
            "constant.language.null",
            "constant.language.import-export-all.ts"
          ],
          "settings": {
            "foreground": "#ab5959"
          }
        },
        {
          "scope": [
            "text.html.derivative",
            "storage.modifier.package",
            "storage.modifier.import",
            "storage.type.java"
          ],
          "settings": {
            "foreground": "#393a34"
          }
        },
        {
          "scope": [
            "string",
            "string punctuation.section.embedded source",
            "attribute.value"
          ],
          "settings": {
            "foreground": "#b56959"
          }
        },
        {
          "scope": [
            "punctuation.definition.string"
          ],
          "settings": {
            "foreground": "#b5695977"
          }
        },
        {
          "scope": [
            "punctuation.support.type.property-name"
          ],
          "settings": {
            "foreground": "#99841877"
          }
        },
        {
          "scope": "support",
          "settings": {
            "foreground": "#998418"
          }
        },
        {
          "scope": [
            "property",
            "meta.property-name",
            "meta.object-literal.key",
            "entity.name.tag.yaml",
            "attribute.name"
          ],
          "settings": {
            "foreground": "#998418"
          }
        },
        {
          "scope": [
            "entity.other.attribute-name",
            "invalid.deprecated.entity.other.attribute-name.html"
          ],
          "settings": {
            "foreground": "#b07d48"
          }
        },
        {
          "scope": [
            "variable",
            "identifier"
          ],
          "settings": {
            "foreground": "#b07d48"
          }
        },
        {
          "scope": [
            "support.type.primitive",
            "entity.name.type"
          ],
          "settings": {
            "foreground": "#2e8f82"
          }
        },
        {
          "scope": "namespace",
          "settings": {
            "foreground": "#b05a78"
          }
        },
        {
          "scope": [
            "keyword.operator",
            "keyword.operator.assignment.compound",
            "meta.var.expr.ts"
          ],
          "settings": {
            "foreground": "#ab5959"
          }
        },
        {
          "scope": "invalid.broken",
          "settings": {
            "fontStyle": "italic",
            "foreground": "#b31d28"
          }
        },
        {
          "scope": "invalid.deprecated",
          "settings": {
            "fontStyle": "italic",
            "foreground": "#b31d28"
          }
        },
        {
          "scope": "invalid.illegal",
          "settings": {
            "fontStyle": "italic",
            "foreground": "#b31d28"
          }
        },
        {
          "scope": "invalid.unimplemented",
          "settings": {
            "fontStyle": "italic",
            "foreground": "#b31d28"
          }
        },
        {
          "scope": "carriage-return",
          "settings": {
            "background": "#d73a49",
            "content": "^M",
            "fontStyle": "italic underline",
            "foreground": "#fafbfc"
          }
        },
        {
          "scope": "message.error",
          "settings": {
            "foreground": "#b31d28"
          }
        },
        {
          "scope": "string variable",
          "settings": {
            "foreground": "#b56959"
          }
        },
        {
          "scope": [
            "source.regexp",
            "string.regexp"
          ],
          "settings": {
            "foreground": "#ab5e3f"
          }
        },
        {
          "scope": [
            "string.regexp.character-class",
            "string.regexp constant.character.escape",
            "string.regexp source.ruby.embedded",
            "string.regexp string.regexp.arbitrary-repitition"
          ],
          "settings": {
            "foreground": "#b56959"
          }
        },
        {
          "scope": "string.regexp constant.character.escape",
          "settings": {
            "foreground": "#bda437"
          }
        },
        {
          "scope": [
            "support.constant"
          ],
          "settings": {
            "foreground": "#a65e2b"
          }
        },
        {
          "scope": [
            "keyword.operator.quantifier.regexp",
            "constant.numeric",
            "number"
          ],
          "settings": {
            "foreground": "#2f798a"
          }
        },
        {
          "scope": [
            "keyword.other.unit"
          ],
          "settings": {
            "foreground": "#ab5959"
          }
        },
        {
          "scope": [
            "constant.language.boolean",
            "constant.language"
          ],
          "settings": {
            "foreground": "#1e754f"
          }
        },
        {
          "scope": "meta.module-reference",
          "settings": {
            "foreground": "#1c6b48"
          }
        },
        {
          "scope": "punctuation.definition.list.begin.markdown",
          "settings": {
            "foreground": "#a65e2b"
          }
        },
        {
          "scope": [
            "markup.heading",
            "markup.heading entity.name"
          ],
          "settings": {
            "fontStyle": "bold",
            "foreground": "#1c6b48"
          }
        },
        {
          "scope": "markup.quote",
          "settings": {
            "foreground": "#2e808f"
          }
        },
        {
          "scope": "markup.italic",
          "settings": {
            "fontStyle": "italic",
            "foreground": "#393a34"
          }
        },
        {
          "scope": "markup.bold",
          "settings": {
            "fontStyle": "bold",
            "foreground": "#393a34"
          }
        },
        {
          "scope": "markup.raw",
          "settings": {
            "foreground": "#1c6b48"
          }
        },
        {
          "scope": [
            "markup.deleted",
            "meta.diff.header.from-file",
            "punctuation.definition.deleted"
          ],
          "settings": {
            "background": "#ffeef0",
            "foreground": "#b31d28"
          }
        },
        {
          "scope": [
            "markup.inserted",
            "meta.diff.header.to-file",
            "punctuation.definition.inserted"
          ],
          "settings": {
            "background": "#f0fff4",
            "foreground": "#22863a"
          }
        },
        {
          "scope": [
            "markup.changed",
            "punctuation.definition.changed"
          ],
          "settings": {
            "background": "#ffebda",
            "foreground": "#e36209"
          }
        },
        {
          "scope": [
            "markup.ignored",
            "markup.untracked"
          ],
          "settings": {
            "background": "#005cc5",
            "foreground": "#f6f8fa"
          }
        },
        {
          "scope": "meta.diff.range",
          "settings": {
            "fontStyle": "bold",
            "foreground": "#6f42c1"
          }
        },
        {
          "scope": "meta.diff.header",
          "settings": {
            "foreground": "#005cc5"
          }
        },
        {
          "scope": "meta.separator",
          "settings": {
            "fontStyle": "bold",
            "foreground": "#005cc5"
          }
        },
        {
          "scope": "meta.output",
          "settings": {
            "foreground": "#005cc5"
          }
        },
        {
          "scope": [
            "brackethighlighter.tag",
            "brackethighlighter.curly",
            "brackethighlighter.round",
            "brackethighlighter.square",
            "brackethighlighter.angle",
            "brackethighlighter.quote"
          ],
          "settings": {
            "foreground": "#586069"
          }
        },
        {
          "scope": "brackethighlighter.unmatched",
          "settings": {
            "foreground": "#b31d28"
          }
        },
        {
          "scope": [
            "constant.other.reference.link",
            "string.other.link",
            "punctuation.definition.string.begin.markdown",
            "punctuation.definition.string.end.markdown"
          ],
          "settings": {
            "foreground": "#b56959"
          }
        },
        {
          "scope": [
            "markup.underline.link.markdown",
            "markup.underline.link.image.markdown"
          ],
          "settings": {
            "fontStyle": "underline",
            "foreground": "#393a3490"
          }
        },
        {
          "scope": [
            "type.identifier",
            "constant.other.character-class.regexp"
          ],
          "settings": {
            "foreground": "#5a6aa6"
          }
        },
        {
          "scope": [
            "entity.other.attribute-name.html.vue"
          ],
          "settings": {
            "foreground": "#59873a"
          }
        },
        {
          "scope": [
            "invalid.illegal.unrecognized-tag.html"
          ],
          "settings": {
            "fontStyle": "normal"
          }
        }
      ],
      "type": "light"
    },
    "dark": {
      "colors": {
        "activityBar.activeBorder": "#4d9375",
        "activityBar.background": "#121212",
        "activityBar.border": "#191919",
        "activityBar.foreground": "#dbd7caee",
        "activityBar.inactiveForeground": "#dedcd550",
        "activityBarBadge.background": "#bfbaaa",
        "activityBarBadge.foreground": "#121212",
        "badge.background": "#dedcd590",
        "badge.foreground": "#121212",
        "breadcrumb.activeSelectionForeground": "#eeeeee18",
        "breadcrumb.background": "#181818",
        "breadcrumb.focusForeground": "#dbd7caee",
        "breadcrumb.foreground": "#959da5",
        "breadcrumbPicker.background": "#121212",
        "button.background": "#4d9375",
        "button.foreground": "#121212",
        "button.hoverBackground": "#4d9375",
        "checkbox.background": "#181818",
        "checkbox.border": "#2f363d",
        "debugToolBar.background": "#121212",
        "descriptionForeground": "#dedcd590",
        "diffEditor.insertedTextBackground": "#4d937550",
        "diffEditor.removedTextBackground": "#ab595950",
        "dropdown.background": "#121212",
        "dropdown.border": "#191919",
        "dropdown.foreground": "#dbd7caee",
        "dropdown.listBackground": "#181818",
        "editor.background": "#121212",
        "editor.findMatchBackground": "#e6cc7722",
        "editor.findMatchHighlightBackground": "#e6cc7744",
        "editor.focusedStackFrameHighlightBackground": "#b808",
        "editor.foldBackground": "#eeeeee10",
        "editor.foreground": "#dbd7caee",
        "editor.inactiveSelectionBackground": "#eeeeee10",
        "editor.lineHighlightBackground": "#181818",
        "editor.selectionBackground": "#eeeeee18",
        "editor.selectionHighlightBackground": "#eeeeee10",
        "editor.stackFrameHighlightBackground": "#a707",
        "editor.wordHighlightBackground": "#1c6b4805",
        "editor.wordHighlightStrongBackground": "#1c6b4810",
        "editorBracketHighlight.foreground1": "#5eaab5",
        "editorBracketHighlight.foreground2": "#4d9375",
        "editorBracketHighlight.foreground3": "#d4976c",
        "editorBracketHighlight.foreground4": "#d9739f",
        "editorBracketHighlight.foreground5": "#e6cc77",
        "editorBracketHighlight.foreground6": "#6394bf",
        "editorBracketMatch.background": "#4d937520",
        "editorError.foreground": "#cb7676",
        "editorGroup.border": "#191919",
        "editorGroupHeader.tabsBackground": "#121212",
        "editorGroupHeader.tabsBorder": "#191919",
        "editorGutter.addedBackground": "#4d9375",
        "editorGutter.commentRangeForeground": "#dedcd550",
        "editorGutter.deletedBackground": "#cb7676",
        "editorGutter.foldingControlForeground": "#dedcd590",
        "editorGutter.modifiedBackground": "#6394bf",
        "editorHint.foreground": "#4d9375",
        "editorIndentGuide.activeBackground": "#ffffff30",
        "editorIndentGuide.background": "#ffffff15",
        "editorInfo.foreground": "#6394bf",
        "editorInlayHint.background": "#181818",
        "editorInlayHint.foreground": "#666666",
        "editorLineNumber.activeForeground": "#bfbaaa",
        "editorLineNumber.foreground": "#dedcd550",
        "editorOverviewRuler.border": "#111",
        "editorStickyScroll.background": "#181818",
        "editorStickyScrollHover.background": "#181818",
        "editorWarning.foreground": "#d4976c",
        "editorWhitespace.foreground": "#ffffff15",
        "editorWidget.background": "#121212",
        "errorForeground": "#cb7676",
        "focusBorder": "#00000000",
        "foreground": "#dbd7caee",
        "gitDecoration.addedResourceForeground": "#4d9375",
        "gitDecoration.conflictingResourceForeground": "#d4976c",
        "gitDecoration.deletedResourceForeground": "#cb7676",
        "gitDecoration.ignoredResourceForeground": "#dedcd550",
        "gitDecoration.modifiedResourceForeground": "#6394bf",
        "gitDecoration.submoduleResourceForeground": "#dedcd590",
        "gitDecoration.untrackedResourceForeground": "#5eaab5",
        "input.background": "#181818",
        "input.border": "#191919",
        "input.foreground": "#dbd7caee",
        "input.placeholderForeground": "#dedcd590",
        "inputOption.activeBackground": "#dedcd550",
        "list.activeSelectionBackground": "#181818",
        "list.activeSelectionForeground": "#dbd7caee",
        "list.focusBackground": "#181818",
        "list.highlightForeground": "#4d9375",
        "list.hoverBackground": "#181818",
        "list.hoverForeground": "#dbd7caee",
        "list.inactiveFocusBackground": "#121212",
        "list.inactiveSelectionBackground": "#181818",
        "list.inactiveSelectionForeground": "#dbd7caee",
        "menu.separatorBackground": "#191919",
        "notificationCenterHeader.background": "#121212",
        "notificationCenterHeader.foreground": "#959da5",
        "notifications.background": "#121212",
        "notifications.border": "#191919",
        "notifications.foreground": "#dbd7caee",
        "notificationsErrorIcon.foreground": "#cb7676",
        "notificationsInfoIcon.foreground": "#6394bf",
        "notificationsWarningIcon.foreground": "#d4976c",
        "panel.background": "#121212",
        "panel.border": "#191919",
        "panelInput.border": "#2f363d",
        "panelTitle.activeBorder": "#4d9375",
        "panelTitle.activeForeground": "#dbd7caee",
        "panelTitle.inactiveForeground": "#959da5",
        "peekViewEditor.background": "#121212",
        "peekViewEditor.matchHighlightBackground": "#ffd33d33",
        "peekViewResult.background": "#121212",
        "peekViewResult.matchHighlightBackground": "#ffd33d33",
        "pickerGroup.border": "#191919",
        "pickerGroup.foreground": "#dbd7caee",
        "problemsErrorIcon.foreground": "#cb7676",
        "problemsInfoIcon.foreground": "#6394bf",
        "problemsWarningIcon.foreground": "#d4976c",
        "progressBar.background": "#4d9375",
        "quickInput.background": "#121212",
        "quickInput.foreground": "#dbd7caee",
        "quickInputList.focusBackground": "#181818",
        "scrollbar.shadow": "#0000",
        "scrollbarSlider.activeBackground": "#dedcd550",
        "scrollbarSlider.background": "#dedcd510",
        "scrollbarSlider.hoverBackground": "#dedcd550",
        "settings.headerForeground": "#dbd7caee",
        "settings.modifiedItemIndicator": "#4d9375",
        "sideBar.background": "#121212",
        "sideBar.border": "#191919",
        "sideBar.foreground": "#bfbaaa",
        "sideBarSectionHeader.background": "#121212",
        "sideBarSectionHeader.border": "#191919",
        "sideBarSectionHeader.foreground": "#dbd7caee",
        "sideBarTitle.foreground": "#dbd7caee",
        "statusBar.background": "#121212",
        "statusBar.border": "#191919",
        "statusBar.debuggingBackground": "#181818",
        "statusBar.debuggingForeground": "#bfbaaa",
        "statusBar.foreground": "#bfbaaa",
        "statusBar.noFolderBackground": "#121212",
        "statusBarItem.prominentBackground": "#181818",
        "tab.activeBackground": "#121212",
        "tab.activeBorder": "#191919",
        "tab.activeBorderTop": "#dedcd590",
        "tab.activeForeground": "#dbd7caee",
        "tab.border": "#191919",
        "tab.hoverBackground": "#181818",
        "tab.inactiveBackground": "#121212",
        "tab.inactiveForeground": "#959da5",
        "tab.unfocusedActiveBorder": "#191919",
        "tab.unfocusedActiveBorderTop": "#191919",
        "tab.unfocusedHoverBackground": "#121212",
        "terminal.ansiBlack": "#393a34",
        "terminal.ansiBlue": "#6394bf",
        "terminal.ansiBrightBlack": "#777777",
        "terminal.ansiBrightBlue": "#6394bf",
        "terminal.ansiBrightCyan": "#5eaab5",
        "terminal.ansiBrightGreen": "#4d9375",
        "terminal.ansiBrightMagenta": "#d9739f",
        "terminal.ansiBrightRed": "#cb7676",
        "terminal.ansiBrightWhite": "#ffffff",
        "terminal.ansiBrightYellow": "#e6cc77",
        "terminal.ansiCyan": "#5eaab5",
        "terminal.ansiGreen": "#4d9375",
        "terminal.ansiMagenta": "#d9739f",
        "terminal.ansiRed": "#cb7676",
        "terminal.ansiWhite": "#dbd7ca",
        "terminal.ansiYellow": "#e6cc77",
        "terminal.foreground": "#dbd7caee",
        "terminal.selectionBackground": "#eeeeee18",
        "textBlockQuote.background": "#121212",
        "textBlockQuote.border": "#191919",
        "textCodeBlock.background": "#121212",
        "textLink.activeForeground": "#4d9375",
        "textLink.foreground": "#4d9375",
        "textPreformat.foreground": "#d1d5da",
        "textSeparator.foreground": "#586069",
        "titleBar.activeBackground": "#121212",
        "titleBar.activeForeground": "#bfbaaa",
        "titleBar.border": "#181818",
        "titleBar.inactiveBackground": "#121212",
        "titleBar.inactiveForeground": "#959da5",
        "tree.indentGuidesStroke": "#2f363d",
        "welcomePage.buttonBackground": "#2f363d",
        "welcomePage.buttonHoverBackground": "#444d56"
      },
      "displayName": "Vitesse Dark",
      "name": "vitesse-dark",
      "semanticHighlighting": true,
      "semanticTokenColors": {
        "class": "#6872ab",
        "interface": "#5d99a9",
        "namespace": "#db889a",
        "property": "#b8a965",
        "type": "#5d99a9"
      },
      "tokenColors": [
        {
          "scope": [
            "comment",
            "punctuation.definition.comment",
            "string.comment"
          ],
          "settings": {
            "foreground": "#758575dd"
          }
        },
        {
          "scope": [
            "delimiter.bracket",
            "delimiter",
            "invalid.illegal.character-not-allowed-here.html",
            "keyword.operator.rest",
            "keyword.operator.spread",
            "keyword.operator.type.annotation",
            "keyword.operator.relational",
            "keyword.operator.assignment",
            "keyword.operator.type",
            "meta.brace",
            "meta.tag.block.any.html",
            "meta.tag.inline.any.html",
            "meta.tag.structure.input.void.html",
            "meta.type.annotation",
            "meta.embedded.block.github-actions-expression",
            "storage.type.function.arrow",
            "meta.objectliteral.ts",
            "punctuation",
            "punctuation.definition.string.begin.html.vue",
            "punctuation.definition.string.end.html.vue"
          ],
          "settings": {
            "foreground": "#666666"
          }
        },
        {
          "scope": [
            "constant",
            "entity.name.constant",
            "variable.language",
            "meta.definition.variable"
          ],
          "settings": {
            "foreground": "#c99076"
          }
        },
        {
          "scope": [
            "entity",
            "entity.name"
          ],
          "settings": {
            "foreground": "#80a665"
          }
        },
        {
          "scope": "variable.parameter.function",
          "settings": {
            "foreground": "#dbd7caee"
          }
        },
        {
          "scope": [
            "entity.name.tag",
            "tag.html"
          ],
          "settings": {
            "foreground": "#4d9375"
          }
        },
        {
          "scope": "entity.name.function",
          "settings": {
            "foreground": "#80a665"
          }
        },
        {
          "scope": [
            "keyword",
            "storage.type.class.jsdoc",
            "punctuation.definition.template-expression"
          ],
          "settings": {
            "foreground": "#4d9375"
          }
        },
        {
          "scope": [
            "storage",
            "storage.type",
            "support.type.builtin",
            "constant.language.undefined",
            "constant.language.null",
            "constant.language.import-export-all.ts"
          ],
          "settings": {
            "foreground": "#cb7676"
          }
        },
        {
          "scope": [
            "text.html.derivative",
            "storage.modifier.package",
            "storage.modifier.import",
            "storage.type.java"
          ],
          "settings": {
            "foreground": "#dbd7caee"
          }
        },
        {
          "scope": [
            "string",
            "string punctuation.section.embedded source",
            "attribute.value"
          ],
          "settings": {
            "foreground": "#c98a7d"
          }
        },
        {
          "scope": [
            "punctuation.definition.string"
          ],
          "settings": {
            "foreground": "#c98a7d77"
          }
        },
        {
          "scope": [
            "punctuation.support.type.property-name"
          ],
          "settings": {
            "foreground": "#b8a96577"
          }
        },
        {
          "scope": "support",
          "settings": {
            "foreground": "#b8a965"
          }
        },
        {
          "scope": [
            "property",
            "meta.property-name",
            "meta.object-literal.key",
            "entity.name.tag.yaml",
            "attribute.name"
          ],
          "settings": {
            "foreground": "#b8a965"
          }
        },
        {
          "scope": [
            "entity.other.attribute-name",
            "invalid.deprecated.entity.other.attribute-name.html"
          ],
          "settings": {
            "foreground": "#bd976a"
          }
        },
        {
          "scope": [
            "variable",
            "identifier"
          ],
          "settings": {
            "foreground": "#bd976a"
          }
        },
        {
          "scope": [
            "support.type.primitive",
            "entity.name.type"
          ],
          "settings": {
            "foreground": "#5DA994"
          }
        },
        {
          "scope": "namespace",
          "settings": {
            "foreground": "#db889a"
          }
        },
        {
          "scope": [
            "keyword.operator",
            "keyword.operator.assignment.compound",
            "meta.var.expr.ts"
          ],
          "settings": {
            "foreground": "#cb7676"
          }
        },
        {
          "scope": "invalid.broken",
          "settings": {
            "fontStyle": "italic",
            "foreground": "#fdaeb7"
          }
        },
        {
          "scope": "invalid.deprecated",
          "settings": {
            "fontStyle": "italic",
            "foreground": "#fdaeb7"
          }
        },
        {
          "scope": "invalid.illegal",
          "settings": {
            "fontStyle": "italic",
            "foreground": "#fdaeb7"
          }
        },
        {
          "scope": "invalid.unimplemented",
          "settings": {
            "fontStyle": "italic",
            "foreground": "#fdaeb7"
          }
        },
        {
          "scope": "carriage-return",
          "settings": {
            "background": "#f97583",
            "content": "^M",
            "fontStyle": "italic underline",
            "foreground": "#24292e"
          }
        },
        {
          "scope": "message.error",
          "settings": {
            "foreground": "#fdaeb7"
          }
        },
        {
          "scope": "string variable",
          "settings": {
            "foreground": "#c98a7d"
          }
        },
        {
          "scope": [
            "source.regexp",
            "string.regexp"
          ],
          "settings": {
            "foreground": "#c4704f"
          }
        },
        {
          "scope": [
            "string.regexp.character-class",
            "string.regexp constant.character.escape",
            "string.regexp source.ruby.embedded",
            "string.regexp string.regexp.arbitrary-repitition"
          ],
          "settings": {
            "foreground": "#c98a7d"
          }
        },
        {
          "scope": "string.regexp constant.character.escape",
          "settings": {
            "foreground": "#e6cc77"
          }
        },
        {
          "scope": [
            "support.constant"
          ],
          "settings": {
            "foreground": "#c99076"
          }
        },
        {
          "scope": [
            "keyword.operator.quantifier.regexp",
            "constant.numeric",
            "number"
          ],
          "settings": {
            "foreground": "#4C9A91"
          }
        },
        {
          "scope": [
            "keyword.other.unit"
          ],
          "settings": {
            "foreground": "#cb7676"
          }
        },
        {
          "scope": [
            "constant.language.boolean",
            "constant.language"
          ],
          "settings": {
            "foreground": "#4d9375"
          }
        },
        {
          "scope": "meta.module-reference",
          "settings": {
            "foreground": "#4d9375"
          }
        },
        {
          "scope": "punctuation.definition.list.begin.markdown",
          "settings": {
            "foreground": "#d4976c"
          }
        },
        {
          "scope": [
            "markup.heading",
            "markup.heading entity.name"
          ],
          "settings": {
            "fontStyle": "bold",
            "foreground": "#4d9375"
          }
        },
        {
          "scope": "markup.quote",
          "settings": {
            "foreground": "#5d99a9"
          }
        },
        {
          "scope": "markup.italic",
          "settings": {
            "fontStyle": "italic",
            "foreground": "#dbd7caee"
          }
        },
        {
          "scope": "markup.bold",
          "settings": {
            "fontStyle": "bold",
            "foreground": "#dbd7caee"
          }
        },
        {
          "scope": "markup.raw",
          "settings": {
            "foreground": "#4d9375"
          }
        },
        {
          "scope": [
            "markup.deleted",
            "meta.diff.header.from-file",
            "punctuation.definition.deleted"
          ],
          "settings": {
            "background": "#86181d",
            "foreground": "#fdaeb7"
          }
        },
        {
          "scope": [
            "markup.inserted",
            "meta.diff.header.to-file",
            "punctuation.definition.inserted"
          ],
          "settings": {
            "background": "#144620",
            "foreground": "#85e89d"
          }
        },
        {
          "scope": [
            "markup.changed",
            "punctuation.definition.changed"
          ],
          "settings": {
            "background": "#c24e00",
            "foreground": "#ffab70"
          }
        },
        {
          "scope": [
            "markup.ignored",
            "markup.untracked"
          ],
          "settings": {
            "background": "#79b8ff",
            "foreground": "#2f363d"
          }
        },
        {
          "scope": "meta.diff.range",
          "settings": {
            "fontStyle": "bold",
            "foreground": "#b392f0"
          }
        },
        {
          "scope": "meta.diff.header",
          "settings": {
            "foreground": "#79b8ff"
          }
        },
        {
          "scope": "meta.separator",
          "settings": {
            "fontStyle": "bold",
            "foreground": "#79b8ff"
          }
        },
        {
          "scope": "meta.output",
          "settings": {
            "foreground": "#79b8ff"
          }
        },
        {
          "scope": [
            "brackethighlighter.tag",
            "brackethighlighter.curly",
            "brackethighlighter.round",
            "brackethighlighter.square",
            "brackethighlighter.angle",
            "brackethighlighter.quote"
          ],
          "settings": {
            "foreground": "#d1d5da"
          }
        },
        {
          "scope": "brackethighlighter.unmatched",
          "settings": {
            "foreground": "#fdaeb7"
          }
        },
        {
          "scope": [
            "constant.other.reference.link",
            "string.other.link",
            "punctuation.definition.string.begin.markdown",
            "punctuation.definition.string.end.markdown"
          ],
          "settings": {
            "foreground": "#c98a7d"
          }
        },
        {
          "scope": [
            "markup.underline.link.markdown",
            "markup.underline.link.image.markdown"
          ],
          "settings": {
            "fontStyle": "underline",
            "foreground": "#dedcd590"
          }
        },
        {
          "scope": [
            "type.identifier",
            "constant.other.character-class.regexp"
          ],
          "settings": {
            "foreground": "#6872ab"
          }
        },
        {
          "scope": [
            "entity.other.attribute-name.html.vue"
          ],
          "settings": {
            "foreground": "#80a665"
          }
        },
        {
          "scope": [
            "invalid.illegal.unrecognized-tag.html"
          ],
          "settings": {
            "fontStyle": "normal"
          }
        }
      ],
      "type": "dark"
    }
  }
}