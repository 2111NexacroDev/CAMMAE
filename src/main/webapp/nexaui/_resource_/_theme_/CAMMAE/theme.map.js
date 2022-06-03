(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "Form" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"font" : nexacro.FontObject("10pt \"Malgun Gothic\""),
            						"color" : nexacro.ColorObject("#000000")
            					}
            				}
            			},
            			"MainFrame" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0078d6")
            					},
            					"deactivate" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e5e5e5")
            					}
            				}
            			},
            			"titleicon" :
            			{
            				"parent" :
            				{
            					"titlebar" :
            					{
            						"parent" :
            						{
            							"MainFrame" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/titlebar_icon_nexacro17.ico')")
            									}
            								}
            							}
            						}
            					},
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("bold 10pt \"Malgun Gothic\""),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/ico_title.png\")"),
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            							},
            							"deactivate" :
            							{
            								"color" : nexacro.ColorObject("#adadad")
            							}
            						}
            					}
            				}
            			},
            			"TitleBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc"),
            						"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            					}
            				}
            			},
            			"minbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_min_N.png\")")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_min_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"maxbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_max_N.png\")")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_max_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"normalbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_normal_N.png\")")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_normal_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"closebutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_close_N.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_close_O.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_close_O.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_close_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"StatusBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc"),
            						"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            					}
            				}
            			},
            			"statustext" :
            			{
            				"parent" :
            				{
            					"StatusBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("8pt \"Malgun Gothic\"")
            							}
            						}
            					}
            				}
            			},
            			"progressbar" :
            			{
            				"parent" :
            				{
            					"StatusBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#ffffff"),
            								"border" : nexacro.BorderObject("1px solid #e5e5e5"),
            								"padding" : nexacro.PaddingObject("5px 5px 5px 5px")
            							}
            						}
            					}
            				}
            			},
            			"resizegrip" :
            			{
            				"parent" :
            				{
            					"StatusBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_grip.png\")")
            							}
            						}
            					}
            				}
            			},
            			"Static" :
            			{
            				"self" :
            				{
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"StaticControl" :
            			{
            				"self" :
            				{
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"Button" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"color" : nexacro.ColorObject("white")
            					},
            					"mouseover" :
            					{
            						"color" : nexacro.ColorObject("white")
            					},
            					"pushed" :
            					{
            						"color" : nexacro.ColorObject("white")
            					},
            					"selected" :
            					{
            						"color" : nexacro.ColorObject("white")
            					},
            					"focused" :
            					{
            						"color" : nexacro.ColorObject("white")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("white")
            					}
            				}
            			},
            			"Edit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999999"),
            						"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999"),
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0078d6")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0078d6")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"MaskEdit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999999"),
            						"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999"),
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0078d6")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0078d6")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					},
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"TextArea" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999999"),
            						"padding" : nexacro.PaddingObject("3px 3px 3px 3px")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999"),
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0078d6")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0078d6")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"TextAreaControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999999"),
            						"padding" : nexacro.PaddingObject("3px 3px 3px 3px")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999"),
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0078d6")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0078d6")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"EditControl" :
            			{
            				"self" :
            				{
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"MaskEditControl" :
            			{
            				"self" :
            				{
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					},
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"Calendar" :
            			{
            				"self" :
            				{
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					},
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999999")
            					}
            				}
            			},
            			"CalendarControl" :
            			{
            				"self" :
            				{
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					},
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999999")
            					}
            				}
            			},
            			"Spin" :
            			{
            				"self" :
            				{
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					},
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999999")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0078d6")
            					}
            				}
            			},
            			"SpinControl" :
            			{
            				"self" :
            				{
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"spinedit" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					},
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"font" : nexacro.FontObject("8pt \"Malgun Gothic\""),
            												"color" : nexacro.ColorObject("#333333")
            											},
            											"disabled" :
            											{
            												"color" : nexacro.ColorObject("#999999")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"disabled" :
            											{
            												"color" : nexacro.ColorObject("#999999")
            											},
            											"enabled" :
            											{
            												"font" : nexacro.FontObject("8pt \"Malgun Gothic\""),
            												"color" : nexacro.ColorObject("#333333")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"spinupbutton" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f2f2f2"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_D.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_N.png\")")
            							}
            						}
            					},
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_CalHeadSpinUp_N.png\")")
            											},
            											"mouseover" :
            											{
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_CalHeadSpinUp_P.png\")")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_CalHeadSpinUp_N.png\")")
            											},
            											"mouseover" :
            											{
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_CalHeadSpinUp_P.png\")")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"spindownbutton" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f2f2f2"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_D.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_N.png\")")
            							}
            						}
            					},
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_CalHeadSpinDown_N.png\")")
            											},
            											"mouseover" :
            											{
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_CalHeadSpinDown_P.png\")")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_CalHeadSpinDown_N.png\")")
            											},
            											"mouseover" :
            											{
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/btn_CalHeadSpinDown_P.png\")")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"tabpage" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cccccc")
            							}
            						}
            					}
            				}
            			},
            			"tabbuttonitem" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("rgb(87, 87, 87)"),
            								"border" : nexacro.BorderObject("1px solid #cccccc"),
            								"padding" : nexacro.PaddingObject("3px 5px 3px 5px")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("rgb(30, 57, 50)"),
            								"border" : nexacro.BorderObject("1px solid #cccccc, 1px solid #cccccc, 1px solid transparent, 1px solid #cccccc"),
            								"font" : nexacro.FontObject("normal bold 10pt/normal \"Arial\"")
            							},
            							"focused_selected" :
            							{
            								"color" : nexacro.ColorObject("rgb(30, 57, 50)"),
            								"border" : nexacro.BorderObject("1px solid #cccccc, 1px solid #cccccc, 1px solid transparent, 1px solid #cccccc"),
            								"font" : nexacro.FontObject("normal bold 10pt/normal \"Arial\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #4ca0e2")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999"),
            								"border" : nexacro.BorderObject("1px solid #e5e5e5")
            							}
            						}
            					}
            				}
            			},
            			"extrabutton" :
            			{
            				"parent" :
            				{
            					"tabbuttonitem" :
            					{
            						"parent" :
            						{
            							"Tab" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabExtra_N.png\")"),
            										"iconPosition" : "right"
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabExtra_N.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabExtra_N.png\")")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"nextbutton" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f0f0f0"),
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabnext_P.png\")")
            							},
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cccccc"),
            								"padding" : nexacro.PaddingObject("3px"),
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabnext_N.png\")")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cccccc"),
            								"padding" : nexacro.PaddingObject("3px"),
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabnext_N.png\")")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #666666"),
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabnext_N.png\")")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cccccc"),
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabnext_P.png\")")
            							}
            						}
            					},
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("3px"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_next_N.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_next_P.png\")")
            									},
            									"mouseover" :
            									{
            									}
            								}
            							}
            						}
            					},
            					"Menu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f2f2f2"),
            								"padding" : nexacro.PaddingObject("0px 3px 0px 3px"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_menunext_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_menunext_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_menunext_D.png\")")
            							}
            						}
            					},
            					"PopupMenu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f2f2f2"),
            								"padding" : nexacro.PaddingObject("5px 0px 5px 0px"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenunext_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenunext_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenunext_D.png\")")
            							}
            						}
            					},
            					"PopupMenuControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f2f2f2"),
            								"padding" : nexacro.PaddingObject("5px 0px 5px 0px"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenunext_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenunext_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenunext_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"prevbutton" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f0f0f0"),
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabprev_P.png\")")
            							},
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cccccc"),
            								"padding" : nexacro.PaddingObject("3px"),
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabprev_N.png\")")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cccccc"),
            								"padding" : nexacro.PaddingObject("3px"),
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabprev_N.png\")")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #666666"),
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabprev_N.png\")")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cccccc"),
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_tabprev_P.png\")")
            							}
            						}
            					},
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("3px"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_prev_N.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url(\"theme://images/btn_prev_P.png\")")
            									},
            									"mouseover" :
            									{
            									}
            								}
            							}
            						}
            					},
            					"Menu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f2f2f2"),
            								"padding" : nexacro.PaddingObject("0px 3px 0px 3px"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_menuprev_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_menuprev_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_menuprev_D.png\")")
            							}
            						}
            					},
            					"PopupMenu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f2f2f2"),
            								"padding" : nexacro.PaddingObject("5px 0px 5px 0px"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenuprev_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenuprev_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenuprev_D.png\")")
            							}
            						}
            					},
            					"PopupMenuControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f2f2f2"),
            								"padding" : nexacro.PaddingObject("5px 0px 5px 0px"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenuprev_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenuprev_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenuprev_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"CheckBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_NN.png\")"),
            						"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_NS.png\")")
            					},
            					"mouseover" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_ON.png\")")
            					},
            					"mouseover_selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_OS.png\")")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999"),
            						"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_DN.png\")")
            					},
            					"disabled_selected" :
            					{
            						"color" : nexacro.ColorObject("#999999"),
            						"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_DS.png\")")
            					}
            				}
            			},
            			"radioitem" :
            			{
            				"parent" :
            				{
            					"Radio" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_Radio_NN.png\")"),
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_Radio_NS.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_Radio_ON.png\")")
            							},
            							"mouseover_selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_Radio_OS.png\")")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_Radio_DN.png\")")
            							},
            							"disabled_selected" :
            							{
            								"color" : nexacro.ColorObject("#999999"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_Radio_DS.png\")")
            							}
            						}
            					}
            				}
            			},
            			"calendaredit" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					}
            				}
            			},
            			"dropbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_N.png\")")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_D.png\")")
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_N.png\")")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_CalDrop_D.png\")")
            							}
            						}
            					},
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenunext_P.png\")")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenunext_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenunext_P.png\")")
            							}
            						}
            					},
            					"ComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenunext_P.png\")")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenunext_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_Pmenunext_P.png\")")
            							}
            						}
            					}
            				}
            			},
            			"calendarspinupbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_D.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_N.png\")")
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_D.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinUp_N.png\")")
            							}
            						}
            					}
            				}
            			},
            			"calendarspindownbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_D.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_N.png\")")
            							}
            						}
            					},
            					"CalendarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_D.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_SpinDown_N.png\")")
            							}
            						}
            					}
            				}
            			},
            			"DatePickerControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e5e5e5")
            					}
            				}
            			},
            			"head" :
            			{
            				"parent" :
            				{
            					"DatePickerControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("12pt \"Malgun Gothic\""),
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #e5e5e5, 0px none")
            							}
            						}
            					}
            				}
            			},
            			"yearspin" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #cccccc")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"monthspin" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #cccccc")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"weekitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"font" : nexacro.FontObject("8pt \"Malgun Gothic\""),
            										"color" : nexacro.ColorObject("#222222")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#999999")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"weekband" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #e5e5e5, 0px none, 1px solid #e5e5e5, 0px none"),
            										"padding" : nexacro.PaddingObject("2px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"dayitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"font" : nexacro.FontObject("8pt \"Malgun Gothic\""),
            										"border" : nexacro.BorderObject("1px solid #e5e5e5")
            									},
            									"selected" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"border" : nexacro.BorderObject("1px solid #0078d6")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#999999")
            									},
            									"today" :
            									{
            										"border" : nexacro.BorderObject("1px solid #0078d6")
            									},
            									"trailingday" :
            									{
            										"border" : nexacro.BorderObject("1px solid #e5e5e5")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"incbutton" :
            			{
            				"parent" :
            				{
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vinc_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vinc_P.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vinc_N.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vinc_D.png\")")
            							}
            						}
            					},
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hinc_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hinc_P.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hinc_N.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hinc_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"decbutton" :
            			{
            				"parent" :
            				{
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vdec_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vdec_P.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vdec_N.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_vdec_D.png\")")
            							}
            						}
            					},
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hdec_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hdec_P.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hdec_N.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url(\"theme://images/btn_hdec_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"trackbar" :
            			{
            				"parent" :
            				{
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("2px solid transparent")
            							},
            							"pushed" :
            							{
            							},
            							"mouseover" :
            							{
            							}
            						}
            					},
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("2px solid transparent")
            							},
            							"pushed" :
            							{
            							},
            							"mouseover" :
            							{
            							}
            						}
            					},
            					"VScrollIndicatorControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("2px solid transparent")
            							},
            							"pushed" :
            							{
            							},
            							"mouseover" :
            							{
            							}
            						}
            					},
            					"HScrollIndicatorControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("2px solid transparent")
            							},
            							"pushed" :
            							{
            							},
            							"mouseover" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"Combo" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999999")
            					}
            				}
            			},
            			"ComboControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #999999")
            					}
            				}
            			},
            			"comboedit" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 3px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					},
            					"ComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 0px 0px 3px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					}
            				}
            			},
            			"combolist" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cccccc")
            							}
            						}
            					},
            					"ComboControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cccccc")
            							}
            						}
            					}
            				}
            			},
            			"listboxitem" :
            			{
            				"parent" :
            				{
            					"combolist" :
            					{
            						"parent" :
            						{
            							"Combo" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"font" : nexacro.FontObject("8pt \"Malgun Gothic\""),
            										"padding" : nexacro.PaddingObject("5px 10px 5px 10px")
            									}
            								}
            							},
            							"ComboControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"font" : nexacro.FontObject("8pt \"Malgun Gothic\""),
            										"padding" : nexacro.PaddingObject("5px 10px 5px 10px")
            									}
            								}
            							}
            						}
            					},
            					"ListBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 10px 0px 10px")
            							},
            							"mouseover" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							},
            							"disabled_selected" :
            							{
            							}
            						}
            					},
            					"ListBoxControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 10px 0px 10px")
            							},
            							"mouseover" :
            							{
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							},
            							"disabled_selected" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"ListBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					}
            				}
            			},
            			"ListBoxControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					}
            				}
            			},
            			"StepControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("0px 0px 10px 0px")
            					}
            				}
            			},
            			"stepitem" :
            			{
            				"parent" :
            				{
            					"StepControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_Step_NN.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_Step_NS.png\")")
            							}
            						}
            					}
            				}
            			},
            			"Menu" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					}
            				}
            			},
            			"menuitem" :
            			{
            				"parent" :
            				{
            					"Menu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 10px 0px 10px")
            							},
            							"selected" :
            							{
            							},
            							"mouseover" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"PopupMenu" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					}
            				}
            			},
            			"PopupMenuControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					}
            				}
            			},
            			"popupmenuitem" :
            			{
            				"parent" :
            				{
            					"PopupMenu" :
            					{
            						"self" :
            						{
            							"selected" :
            							{
            							},
            							"mouseover" :
            							{
            							}
            						}
            					},
            					"PopupMenuControl" :
            					{
            						"self" :
            						{
            							"selected" :
            							{
            							},
            							"mouseover" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemcheckbox" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_NS.png\")")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_NS.png\")")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemtext" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 5px 0px 5px")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 5px 0px 5px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemhotkeytext" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"font" : nexacro.FontObject("8pt \"Malgun Gothic\""),
            										"color" : nexacro.ColorObject("#7a7a7a"),
            										"padding" : nexacro.PaddingObject("0px 5px 0px 0px")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"font" : nexacro.FontObject("8pt \"Malgun Gothic\""),
            										"color" : nexacro.ColorObject("#7a7a7a"),
            										"padding" : nexacro.PaddingObject("0px 5px 0px 0px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemexpandimage" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_hinc_N.png\")")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_hinc_N.png\")")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"ProgressBar" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e5e5e5")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					}
            				}
            			},
            			"ProgressBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e5e5e5")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					}
            				}
            			},
            			"progressbartext" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("8pt \"Malgun Gothic\"")
            							}
            						}
            					},
            					"ProgressBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"font" : nexacro.FontObject("8pt \"Malgun Gothic\"")
            							}
            						}
            					}
            				}
            			},
            			"progressbaritem" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            							}
            						}
            					},
            					"ProgressBarControl" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"ImageViewer" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e5e5e5")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #99c9ef")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e5e5e5")
            					}
            				}
            			},
            			"imagetext" :
            			{
            				"parent" :
            				{
            					"ImageViewer" :
            					{
            						"self" :
            						{
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					}
            				}
            			},
            			"Div" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e5e5e5")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #99c9ef")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999"),
            						"border" : nexacro.BorderObject("1px solid #e5e5e5")
            					}
            				}
            			},
            			"PopupDiv" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e5e5e5")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #99c9ef")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999"),
            						"border" : nexacro.BorderObject("1px solid #e5e5e5")
            					}
            				}
            			},
            			"View" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e5e5e5")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #99c9ef")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999"),
            						"border" : nexacro.BorderObject("1px solid #e5e5e5")
            					}
            				}
            			},
            			"groupboxcontents" :
            			{
            				"parent" :
            				{
            					"GroupBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #e5e5e5")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f2f2f2")
            							}
            						}
            					}
            				}
            			},
            			"groupboxtitle" :
            			{
            				"parent" :
            				{
            					"GroupBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_groupboxtit.png\")"),
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_groupboxtit_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"fileuploaditemedit" :
            			{
            				"parent" :
            				{
            					"fileuploaditem" :
            					{
            						"parent" :
            						{
            							"FileUpload" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#666666"),
            										"border" : nexacro.BorderObject("1px solid #cccccc"),
            										"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #0078d6")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #e5e5e5")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"fileuploaditembutton" :
            			{
            				"parent" :
            				{
            					"fileuploaditem" :
            					{
            						"parent" :
            						{
            							"FileUpload" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #cccccc")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #666666")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#999999"),
            										"border" : nexacro.BorderObject("1px solid #cccccc")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"FileDownload" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc"),
            						"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #666666")
            					},
            					"pushed" :
            					{
            						"color" : nexacro.ColorObject("#ffffff")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999")
            					}
            				}
            			},
            			"Grid" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc")
            					}
            				}
            			},
            			"cell" :
            			{
            				"class" :
            				[
            					{
            						"cell_style1" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"selected" :
            														{
            															"color" : nexacro.ColorObject("#66666"),
            															"border" : nexacro.BorderObject("1px solid #dbdee2"),
            															"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            														},
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#66666"),
            															"border" : nexacro.BorderObject("1px solid #dbdee2"),
            															"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            														},
            														"disabled" :
            														{
            															"color" : nexacro.ColorObject("#66666"),
            															"border" : nexacro.BorderObject("1px solid #dbdee2"),
            															"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            														},
            														"mouseover" :
            														{
            															"color" : nexacro.ColorObject("#66666"),
            															"border" : nexacro.BorderObject("1px solid #dbdee2"),
            															"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"blue_font" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("blue")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"red_font" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("red")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				],
            				"parent" :
            				{
            					"row" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"font" : nexacro.FontObject("normal bold 11pt/normal \"Malgun Gothic\""),
            												"border" : nexacro.BorderObject("1px solid #c6c6c6")
            											}
            										}
            									}
            								}
            							},
            							"summary" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #e5e5e5")
            											}
            										}
            									}
            								}
            							},
            							"body" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #e5e5e5"),
            												"padding" : nexacro.PaddingObject("2px")
            											},
            											"selected" :
            											{
            											},
            											"blinked" :
            											{
            												"color" : nexacro.ColorObject("#ffffff")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"body" :
            					{
            						"parent" :
            						{
            							"ListView" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dbdee2"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dbdee2"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"readonly" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dbdee2"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dbdee2"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #c4c9cf")
            									}
            								}
            							}
            						}
            					},
            					"detail" :
            					{
            						"parent" :
            						{
            							"ListView" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dbdee2"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dbdee2"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"readonly" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dbdee2"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #dbdee2"),
            										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #c4c9cf")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"cellcheckbox" :
            			{
            				"parent" :
            				{
            					"cell" :
            					{
            						"parent" :
            						{
            							"row" :
            							{
            								"parent" :
            								{
            									"head" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_NN.png\")")
            													},
            													"selected" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_NS.png\")")
            													},
            													"mouseover" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_ON.png\")")
            													},
            													"mouseover_selected" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_OS.png\")")
            													},
            													"disabled" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_DN.png\")")
            													},
            													"disabled_selected" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_DS.png\")")
            													}
            												}
            											}
            										}
            									},
            									"body" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_NN.png\")")
            													},
            													"selected" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_NS.png\")")
            													},
            													"mouseover" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_ON.png\")")
            													},
            													"mouseover_selected" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_OS.png\")")
            													},
            													"disabled" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_DN.png\")")
            													},
            													"disabled_selected" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_DS.png\")")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_NN.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_NS.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_ON.png\")")
            							},
            							"mouseover_selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_OS.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_DN.png\")")
            							},
            							"disabled_selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_check_DS.png\")")
            							}
            						}
            					}
            				}
            			},
            			"cellbutton" :
            			{
            				"parent" :
            				{
            					"cell" :
            					{
            						"parent" :
            						{
            							"row" :
            							{
            								"parent" :
            								{
            									"head" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"border" : nexacro.BorderObject("1px solid #cccccc"),
            														"textPadding" : nexacro.PaddingObject("0px 3px 0px 3px")
            													},
            													"mouseover" :
            													{
            														"border" : nexacro.BorderObject("1px solid #666666")
            													},
            													"pushed" :
            													{
            														"color" : nexacro.ColorObject("#ffffff")
            													},
            													"selected" :
            													{
            														"border" : nexacro.BorderObject("2px solid #0078d6")
            													},
            													"disabled" :
            													{
            														"color" : nexacro.ColorObject("#999999")
            													}
            												}
            											}
            										}
            									},
            									"body" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"border" : nexacro.BorderObject("1px solid #cccccc"),
            														"textPadding" : nexacro.PaddingObject("0px 3px 0px 3px"),
            														"color" : nexacro.ColorObject("white")
            													},
            													"mouseover" :
            													{
            														"color" : nexacro.ColorObject("white"),
            														"border" : nexacro.BorderObject("1px solid #666666")
            													},
            													"pushed" :
            													{
            														"color" : nexacro.ColorObject("white"),
            														"border" : nexacro.BorderObject("0px none")
            													},
            													"selected" :
            													{
            														"color" : nexacro.ColorObject("white"),
            														"border" : nexacro.BorderObject("2px solid #0078d6")
            													},
            													"focused" :
            													{
            														"color" : nexacro.ColorObject("white"),
            														"border" : nexacro.BorderObject("2px solid #0078d6")
            													},
            													"disabled" :
            													{
            														"color" : nexacro.ColorObject("white"),
            														"border" : nexacro.BorderObject("0px none")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cccccc"),
            								"textPadding" : nexacro.PaddingObject("0px 3px 0px 3px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #666666")
            							},
            							"pushed" :
            							{
            								"color" : nexacro.ColorObject("#ffffff"),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("2px solid #0078d6")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999"),
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					}
            				}
            			},
            			"subcell" :
            			{
            				"parent" :
            				{
            					"cell" :
            					{
            						"parent" :
            						{
            							"row" :
            							{
            								"parent" :
            								{
            									"body" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"border" : nexacro.BorderObject("1px solid #e5e5e5"),
            														"padding" : nexacro.PaddingObject("2px")
            													},
            													"mouseover" :
            													{
            														"border" : nexacro.BorderObject("1px solid #e5e5e5"),
            														"padding" : nexacro.PaddingObject("2px")
            													},
            													"disabled" :
            													{
            														"border" : nexacro.BorderObject("1px solid #e5e5e5"),
            														"padding" : nexacro.PaddingObject("2px")
            													},
            													"selected" :
            													{
            													},
            													"blinked" :
            													{
            														"color" : nexacro.ColorObject("#ffffff")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"selection" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"Grid" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("2px solid #0078d6")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"cellexpandbutton" :
            			{
            				"parent" :
            				{
            					"cell" :
            					{
            						"parent" :
            						{
            							"row" :
            							{
            								"parent" :
            								{
            									"body" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/btn_GridExpand_N.png\")")
            													},
            													"selected" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/btn_GridExpand_N.png\")")
            													},
            													"focused" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/btn_GridExpand_N.png\")")
            													},
            													"mouseover" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/btn_GridExpand_P.png\")")
            													},
            													"pushed" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/btn_GridExpand_P.png\")")
            													},
            													"disabled" :
            													{
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_GridExpand_N.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_GridExpand_N.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_GridExpand_P.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_GridExpand_P.png\")")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"celledit" :
            			{
            				"parent" :
            				{
            					"cell" :
            					{
            						"parent" :
            						{
            							"row" :
            							{
            								"parent" :
            								{
            									"body" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"border" : nexacro.BorderObject("1px solid #999999"),
            														"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            													},
            													"disabled" :
            													{
            														"color" : nexacro.ColorObject("#999999"),
            														"border" : nexacro.BorderObject("1px solid #cccccc")
            													},
            													"focused" :
            													{
            														"border" : nexacro.BorderObject("1px solid #0078d6")
            													},
            													"readonly" :
            													{
            														"border" : nexacro.BorderObject("1px solid #cccccc")
            													},
            													"mouseover" :
            													{
            														"border" : nexacro.BorderObject("1px solid #0078d6")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #999999"),
            								"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999"),
            								"border" : nexacro.BorderObject("1px solid #cccccc")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0078d6")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cccccc")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0078d6")
            							}
            						}
            					}
            				}
            			},
            			"cellmaskedit" :
            			{
            				"parent" :
            				{
            					"cell" :
            					{
            						"parent" :
            						{
            							"row" :
            							{
            								"parent" :
            								{
            									"body" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"border" : nexacro.BorderObject("1px solid #999999"),
            														"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            													},
            													"disabled" :
            													{
            														"color" : nexacro.ColorObject("#999999"),
            														"border" : nexacro.BorderObject("1px solid #cccccc")
            													},
            													"focused" :
            													{
            														"border" : nexacro.BorderObject("1px solid #0078d6")
            													},
            													"readonly" :
            													{
            														"border" : nexacro.BorderObject("1px solid #cccccc")
            													},
            													"mouseover" :
            													{
            														"border" : nexacro.BorderObject("1px solid #0078d6")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #999999"),
            								"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999"),
            								"border" : nexacro.BorderObject("1px solid #cccccc")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0078d6")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cccccc")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0078d6")
            							}
            						}
            					}
            				}
            			},
            			"celltextarea" :
            			{
            				"parent" :
            				{
            					"cell" :
            					{
            						"parent" :
            						{
            							"row" :
            							{
            								"parent" :
            								{
            									"body" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"border" : nexacro.BorderObject("1px solid #999999"),
            														"padding" : nexacro.PaddingObject("3px 3px 3px 3px")
            													},
            													"disabled" :
            													{
            														"color" : nexacro.ColorObject("#999999"),
            														"border" : nexacro.BorderObject("1px solid #cccccc")
            													},
            													"focused" :
            													{
            														"border" : nexacro.BorderObject("1px solid #0078d6")
            													},
            													"readonly" :
            													{
            														"border" : nexacro.BorderObject("1px solid #cccccc")
            													},
            													"mouseover" :
            													{
            														"border" : nexacro.BorderObject("1px solid #0078d6")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #999999"),
            								"padding" : nexacro.PaddingObject("3px 3px 3px 3px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999"),
            								"border" : nexacro.BorderObject("1px solid #cccccc")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0078d6")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cccccc")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #0078d6")
            							}
            						}
            					}
            				}
            			},
            			"treeitembutton" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"cell" :
            							{
            								"parent" :
            								{
            									"row" :
            									{
            										"parent" :
            										{
            											"body" :
            											{
            												"parent" :
            												{
            													"Grid" :
            													{
            														"self" :
            														{
            															"expand" :
            															{
            																"icon" : nexacro.UrlObject("URL(\"theme://images/img_TreeCollapse.png\")")
            															},
            															"collapse" :
            															{
            																"icon" : nexacro.UrlObject("URL(\"theme://images/img_TreeExpand.png\")")
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"treeitemimage" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"cell" :
            							{
            								"parent" :
            								{
            									"row" :
            									{
            										"parent" :
            										{
            											"body" :
            											{
            												"parent" :
            												{
            													"Grid" :
            													{
            														"self" :
            														{
            															"leaf" :
            															{
            																"icon" : nexacro.UrlObject("URL(\"theme://images/img_TreeItem.png\")")
            															},
            															"collapse" :
            															{
            																"icon" : nexacro.UrlObject("URL(\"theme://images/img_TreeClose.png\")")
            															},
            															"expand" :
            															{
            																"icon" : nexacro.UrlObject("URL(\"theme://images/img_TreeOpen.png\")")
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"treeitemcheckbox" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"cell" :
            							{
            								"parent" :
            								{
            									"row" :
            									{
            										"parent" :
            										{
            											"body" :
            											{
            												"parent" :
            												{
            													"Grid" :
            													{
            														"self" :
            														{
            															"enabled" :
            															{
            																"icon" : nexacro.UrlObject("URL(\"theme://images/img_TreeCheck_N.png\")")
            															},
            															"selected" :
            															{
            																"icon" : nexacro.UrlObject("URL(\"theme://images/img_TreeCheck_S.png\")")
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"celltreeline" :
            			{
            				"parent" :
            				{
            					"cell" :
            					{
            						"parent" :
            						{
            							"row" :
            							{
            								"parent" :
            								{
            									"body" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"border" : nexacro.BorderObject("1px dotted #999999")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Plugin" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e5e5e5")
            					}
            				}
            			},
            			"PluginControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e5e5e5")
            					}
            				}
            			},
            			"WebBrowser" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e5e5e5")
            					}
            				}
            			},
            			"WebBrowserControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e5e5e5")
            					}
            				}
            			},
            			"WebView" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e5e5e5")
            					}
            				}
            			},
            			"WebViewControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e5e5e5")
            					}
            				}
            			},
            			"Sketch" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #e5e5e5")
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#999999"),
            						"border" : nexacro.BorderObject("1px solid #e5e5e5")
            					}
            				}
            			},
            			"ListView" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc"),
            						"color" : nexacro.ColorObject("#000000")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cccccc"),
            						"color" : nexacro.ColorObject("#000000")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0078d6")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #0078d6")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"body" :
            			{
            				"parent" :
            				{
            					"ListView" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
            								"font" : nexacro.FontObject("normal 10pt/normal \"Malgun Gothic\"")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
            								"font" : nexacro.FontObject("normal 10pt/normal \"Malgun Gothic\"")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
            								"font" : nexacro.FontObject("normal 10pt/normal \"Malgun Gothic\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
            								"font" : nexacro.FontObject("normal 10pt/normal \"Malgun Gothic\"")
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					}
            				}
            			},
            			"detail" :
            			{
            				"parent" :
            				{
            					"ListView" :
            					{
            						"self" :
            						{
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
            								"font" : nexacro.FontObject("normal 10pt/normal \"Malgun Gothic\"")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
            								"font" : nexacro.FontObject("normal 10pt/normal \"Malgun Gothic\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
            								"font" : nexacro.FontObject("normal 10pt/normal \"Malgun Gothic\"")
            							},
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
            								"font" : nexacro.FontObject("normal 10pt/normal \"Malgun Gothic\"")
            							},
            							"selected" :
            							{
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#999999")
            							}
            						}
            					}
            				}
            			},
            			"expandbar" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"ListView" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #cccccc")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #666666")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("2px solid #0078d6")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#999999")
            									},
            									"collapse" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_drop_N.png\")")
            									},
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("URL('theme://images/btn_expand.png')")
            									}
            								}
            							}
            						}
            					}
            				}
            			}
		},
		{
            "includeStatusMap" : true,
            			"hasListViewExpandStatus" : true
		}
		);
		var imgcache = nexacro._getImageCacheMaps();
        imgcache[nexacro._getImageLocation("theme://images/titlebar_icon_nexacro17.ico")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_title.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_min_N.png")] = { width:14, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_max_N.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_normal_N.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_close_N.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_close_O.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_close_D.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_max_D.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_min_D.png")] = { width:14, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_normal_D.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/img_grip.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SpinUp_N.png")] = { width:8, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SpinUp_P.png")] = { width:8, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SpinUp_D.png")] = { width:8, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SpinDown_N.png")] = { width:8, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SpinDown_P.png")] = { width:8, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SpinDown_D.png")] = { width:8, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabExtra_N.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabnext_P.png")] = { width:5, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabprev_P.png")] = { width:5, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabnext_N.png")] = { width:5, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabprev_N.png")] = { width:5, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/img_check_NN.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_check_NS.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_check_ON.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_check_OS.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_check_DN.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_check_DS.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Radio_NN.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Radio_NS.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Radio_ON.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Radio_OS.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Radio_DN.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Radio_DS.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_CalDrop_N.png")] = { width:15, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_CalDrop_P.png")] = { width:15, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_CalDrop_D.png")] = { width:15, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_next_N.png")] = { width:11, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_prev_N.png")] = { width:11, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_prev_P.png")] = { width:11, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_next_P.png")] = { width:11, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_CalHeadSpinUp_N.png")] = { width:6, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_CalHeadSpinUp_P.png")] = { width:6, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_CalHeadSpinDown_N.png")] = { width:6, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_CalHeadSpinDown_P.png")] = { width:6, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_vinc_N.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_vinc_P.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_vinc_D.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_vdec_N.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_vdec_P.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_vdec_D.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_hinc_N.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_hinc_P.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_hinc_D.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_hdec_N.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_hdec_P.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_hdec_D.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenunext_P.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Step_NN.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Step_NS.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_menunext_N.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_menunext_P.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_menunext_D.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_menuprev_N.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_menuprev_P.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_menuprev_D.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenuprev_N.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenuprev_P.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenuprev_D.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenunext_N.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenunext_D.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/img_groupboxtit.png")] = { width:8, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/img_groupboxtit_D.png")] = { width:8, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_GridExpand_N.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_GridExpand_P.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeCollapse.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeExpand.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeItem.png")] = { width:9, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeClose.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeOpen.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeCheck_N.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeCheck_S.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_drop_N.png")] = { width:14, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_expand.png")] = { width:14, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/1234.png")] = { width:500, height:500 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_drop_D.png")] = { width:14, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_drop_P.png")] = { width:14, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabExtra_D.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabExtra_O.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_check.png")] = { width:12, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_expand.png")] = { width:9, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_zoom.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/logo.png")] = { width:500, height:500 };
        		imgcache[nexacro._getImageLocation("theme://images/logo1.png")] = { width:50, height:50 };
        		imgcache[nexacro._getImageLocation("theme://images/logo2.png")] = { width:500, height:500 };
        		imgcache[nexacro._getImageLocation("theme://images/pop_menu_icon.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/test01.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/test02.png")] = { width:7, height:5 };
	};
}
)();
