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
            						"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            						"color" : nexacro.ColorObject("#222222")
            					},
            					"contents" :
            					{
            					}
            				}
            			},
            			"MainFrame" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #1c2124")
            					},
            					"deactivate" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5a677f")
            					}
            				}
            			},
            			"VScrollBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none , 0px none , 0px none , 1px solid #9c9c9c"),
            						"padding" : nexacro.PaddingObject("1px")
            					},
            					"disabled" :
            					{
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
            								"icon" : nexacro.UrlObject("URL(\"theme://images/scl_WF_VInc.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/scl_WF_VIncM.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/scl_WF_VIncP.png\")")
            							},
            							"disabled" :
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
            								"icon" : nexacro.UrlObject("URL(\"theme://images/scl_WF_HInc.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/scl_WF_HIncM.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/scl_WF_HIncP.png\")")
            							},
            							"disabled" :
            							{
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
            								"icon" : nexacro.UrlObject("URL(\"theme://images/scl_WF_VDec.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/scl_WF_VDecM.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/scl_WF_VDecP.png\")")
            							},
            							"disabled" :
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
            								"icon" : nexacro.UrlObject("URL(\"theme://images/scl_WF_HDec.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/scl_WF_HDecM.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/scl_WF_HDecP.png\")")
            							},
            							"disabled" :
            							{
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
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"vscrollbar" :
            					{
            						"parent" :
            						{
            							"ListView" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"pushed" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"selected" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"HScrollBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c , 0px none , 0px none"),
            						"padding" : nexacro.PaddingObject("1px")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"TitleBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            						"color" : nexacro.ColorObject("#ffffff"),
            						"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
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
            								"icon" : nexacro.UrlObject("url('theme://images/btn_TF_Min.png')"),
            								"padding" : nexacro.PaddingObject("0px 0px 8px")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/btn_TF_MinP.png')")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/btn_TF_MinD.png')")
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
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_Max.png\")")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_MaxP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_MaxD.png\")")
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
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_Normal.png\")")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_NormalP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_NormalD.png\")")
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
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_Close.png\")")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_CloseP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_CloseD.png\")")
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
            						"border" : nexacro.BorderObject("1px solid #9c9c9c , 0px none , 0px none, 0px none"),
            						"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
            						"color" : nexacro.ColorObject("#30373b"),
            						"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
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
            								"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            								"padding" : nexacro.PaddingObject("2px 0px")
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
            								"icon" : nexacro.UrlObject("URL(\"theme://images/img_SB_Grip.png\")")
            							}
            						}
            					}
            				}
            			},
            			"Static" :
            			{
            				"class" :
            				[
            					{
            						"sta_WF_GTitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b8bbc3"),
            									"color" : nexacro.ColorObject("#30373b"),
            									"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GLabel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ccd0d9"),
            									"color" : nexacro.ColorObject("#30373b"),
            									"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            									"letterSpacing" : nexacro.CSSValueObject("1px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GArea" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ccd0d9")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_GStatus" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#746f6f"),
            									"font" : nexacro.FontObject("11px \"Malgun Gothic\"")
            								}
            							}
            						}
            					}
            				],
            				"self" :
            				{
            					"enabled" :
            					{
            						"wordWrap" : "char"
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#c1c1c1")
            					}
            				}
            			},
            			"Edit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            						"padding" : nexacro.PaddingObject("0px 8px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            						"color" : nexacro.ColorObject("#c1c1c1")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#c1c1c1")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #555555"),
            						"color" : nexacro.ColorObject("#222222")
            					}
            				},
            				"class" :
            				[
            					{
            						"edi_WF_Essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f44528")
            								}
            							}
            						}
            					}
            				]
            			},
            			"MaskEdit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            						"padding" : nexacro.PaddingObject("0px 8px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            						"color" : nexacro.ColorObject("#c1c1c1")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#c1c1c1")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #555555"),
            						"color" : nexacro.ColorObject("#222222")
            					},
            					"invalidtext" :
            					{
            						"color" : nexacro.ColorObject("#f44528")
            					}
            				},
            				"class" :
            				[
            					{
            						"msk_WF_Essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f44528")
            								}
            							}
            						}
            					}
            				]
            			},
            			"TextArea" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            						"padding" : nexacro.PaddingObject("8px 8px 0px"),
            						"wordWrap" : "char",
            						"font" : nexacro.FontObject("12px/18px \"Malgun Gothic\"")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            						"color" : nexacro.ColorObject("#c1c1c1")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#c1c1c1")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #555555"),
            						"color" : nexacro.ColorObject("#222222")
            					}
            				},
            				"class" :
            				[
            					{
            						"txt_WF_Essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f44528")
            								}
            							}
            						}
            					}
            				]
            			},
            			"Button" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528")
            					},
            					"pushed" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528"),
            						"color" : nexacro.ColorObject("#ffffff")
            					},
            					"selected" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528"),
            						"color" : nexacro.ColorObject("#ffffff")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            						"color" : nexacro.ColorObject("#c1c1c1")
            					}
            				},
            				"class" :
            				[
            					{
            						"btn_WF_RtlLogout" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_LtrLogout.png')"),
            									"font" : nexacro.FontObject("bold 28px \"Malgun Gothic\""),
            									"textPadding" : nexacro.PaddingObject("0px 15px"),
            									"rtlIcon" : nexacro.UrlObject("url('theme://images/btn_WF_RtlLogout.png')"),
            									"padding" : nexacro.PaddingObject("0px 15px")
            								},
            								"mouseover" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_LtrLogout.png')"),
            									"font" : nexacro.FontObject("bold 28px \"Malgun Gothic\""),
            									"textPadding" : nexacro.PaddingObject("0px 15px"),
            									"rtlIcon" : nexacro.UrlObject("url('theme://images/btn_WF_RtlLogout.png')"),
            									"padding" : nexacro.PaddingObject("0px 15px")
            								},
            								"pushed" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_LtrLogout.png')"),
            									"font" : nexacro.FontObject("bold 28px \"Malgun Gothic\""),
            									"textPadding" : nexacro.PaddingObject("0px 15px"),
            									"rtlIcon" : nexacro.UrlObject("url('theme://images/btn_WF_RtlLogout.png')"),
            									"padding" : nexacro.PaddingObject("0px 15px")
            								},
            								"disabled" :
            								{
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_LtrLogout.png')"),
            									"font" : nexacro.FontObject("bold 28px \"Malgun Gothic\""),
            									"textPadding" : nexacro.PaddingObject("0px 15px"),
            									"rtlIcon" : nexacro.UrlObject("url('theme://images/btn_WF_RtlLogout.png')"),
            									"padding" : nexacro.PaddingObject("0px 15px")
            								}
            							}
            						}
            					}
            				]
            			},
            			"CheckBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_Box.png\")"),
            						"textPadding" : nexacro.PaddingObject("0px 6px")
            					},
            					"disabled" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxD.png\")"),
            						"color" : nexacro.ColorObject("#c1c1c1")
            					},
            					"mouseover" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxM.png\")")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxS.png\")")
            					},
            					"mouseover_selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxMS.png\")")
            					},
            					"disabled_selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxDS.png\")"),
            						"color" : nexacro.ColorObject("#c1c1c1")
            					}
            				}
            			},
            			"Spin" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cbcbcb")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #555555"),
            						"color" : nexacro.ColorObject("#222222")
            					}
            				},
            				"class" :
            				[
            					{
            						"spn_WF_Essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f44528")
            								}
            							}
            						}
            					}
            				]
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
            								"padding" : nexacro.PaddingObject("0px 8px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#c1c1c1")
            							},
            							"invalidtext" :
            							{
            								"color" : nexacro.ColorObject("#f44528")
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
            												"color" : nexacro.ColorObject("#ffffff")
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
            												"color" : nexacro.ColorObject("#ffffff")
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
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpbtnN.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpbtnN.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpbtnP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_UpbtnD.png\")")
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
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtn.png\")")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtnM.png\")")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtnM.png\")")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtnD.png\")")
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
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtn.png\")")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtnM.png\")")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtnM.png\")")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtnD.png\")")
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
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DnbtnN.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DnbtnN.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DnbtnP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_WF_DnbtnD.png\")")
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
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtn.png\")")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtnM.png\")")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtnM.png\")")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtnD.png\")")
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
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtn.png\")")
            											},
            											"mouseover" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtnM.png\")")
            											},
            											"pushed" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtnM.png\")")
            											},
            											"disabled" :
            											{
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtnD.png\")")
            											}
            										}
            									}
            								}
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
            						"border" : nexacro.BorderObject("1px solid #9c9c9c")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cbcbcb")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #555555"),
            						"color" : nexacro.ColorObject("#222222")
            					}
            				},
            				"class" :
            				[
            					{
            						"cbo_WF_Essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f44528")
            								}
            							}
            						}
            					}
            				]
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
            								"padding" : nexacro.PaddingObject("0px 8px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#c1c1c1")
            							}
            						}
            					},
            					"cellcombo" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 3px"),
            										"color" : nexacro.ColorObject("#222222"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 3px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"dropbutton" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropP.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropD.png\")")
            							}
            						}
            					},
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_Drop.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_Drop.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropD.png\")")
            							}
            						}
            					},
            					"cellcalendar" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_Drop.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_Drop.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropP.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropD.png\")")
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_Drop.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_Drop.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropP.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_DropD.png\")")
            									}
            								}
            							}
            						}
            					},
            					"cellcombo" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropP.png\")")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropP.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropD.png\")")
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_Drop.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropP.png\")")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropP.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cbo_WF_DropD.png\")")
            									}
            								}
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
            						"border" : nexacro.BorderObject("1px solid #9c9c9c")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cbcbcb")
            					}
            				}
            			},
            			"ListBoxControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cbcbcb")
            					}
            				}
            			},
            			"listboxitem" :
            			{
            				"parent" :
            				{
            					"ListBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("5px")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#f44528")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#c1c1c1")
            							}
            						}
            					},
            					"ListBoxControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("5px")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#f44528")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#c1c1c1")
            							}
            						}
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
            								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_Item.png')"),
            								"textPadding" : nexacro.PaddingObject("0px 10px 0px 6px")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemD.png\")"),
            								"color" : nexacro.ColorObject("#c1c1c1")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemM.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemS.png\")")
            							},
            							"mouseover_selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemMS.png\")")
            							},
            							"disabled_selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemDS.png\")"),
            								"color" : nexacro.ColorObject("#c1c1c1")
            							}
            						}
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
            								"border" : nexacro.BorderObject("1px solid #9c9c9c")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cbcbcb")
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
            								"padding" : nexacro.PaddingObject("0px 3px")
            							},
            							"disabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 3px 0px 3px"),
            								"color" : nexacro.ColorObject("#c1c1c1"),
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
            							}
            						}
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
            								"padding" : nexacro.PaddingObject("0px 20px")
            							},
            							"mouseover" :
            							{
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
            						"border" : nexacro.BorderObject("1px solid #9c9c9c")
            					}
            				}
            			},
            			"PopupMenuControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c")
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
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("8px 3px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#c1c1c1")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#f44528"),
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
            							}
            						}
            					},
            					"PopupMenuControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("8px 3px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#c1c1c1")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#f44528"),
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
            										"icon" : nexacro.UrlObject("URL(\"theme://images/pmnu_WF_Expand.png\")")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/pmnu_WF_Expand.png\")")
            									}
            								}
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
            										"icon" : nexacro.UrlObject("URL(\"theme://images/pmnu_WF_ChkIcon.png\")"),
            										"padding" : nexacro.PaddingObject("0px 2px 0px 0px")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/pmnu_WF_ChkIcon.png\")"),
            										"padding" : nexacro.PaddingObject("0px 2px 0px 0px")
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
            										"color" : nexacro.ColorObject("#444444"),
            										"font" : nexacro.FontObject("11px \"Malgun Gothic\""),
            										"padding" : nexacro.PaddingObject("0px 4px 0px 8px")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#444444"),
            										"font" : nexacro.FontObject("11px \"Malgun Gothic\""),
            										"padding" : nexacro.PaddingObject("0px 4px 0px 8px")
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
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 5px")
            									}
            								}
            							},
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 10px 0px 5px")
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
            						"border" : nexacro.BorderObject("1px solid #9c9c9c")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c")
            					}
            				}
            			},
            			"ProgressBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c")
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
            						},
            						"class" :
            						[
            							{
            								"pgb_WF_Image" :
            								{
            									"self" :
            									{
            										"disabled" :
            										{
            										}
            									}
            								}
            							}
            						]
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
            								"color" : nexacro.ColorObject("#222222"),
            								"font" : nexacro.FontObject("11px \"Malgun Gothic\"")
            							},
            							"disabled" :
            							{
            								"font" : nexacro.FontObject("11px \"Malgun Gothic\""),
            								"color" : nexacro.ColorObject("#c1c1c1")
            							}
            						}
            					},
            					"ProgressBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#222222"),
            								"font" : nexacro.FontObject("11px \"Malgun Gothic\"")
            							},
            							"disabled" :
            							{
            								"font" : nexacro.FontObject("11px \"Malgun Gothic\""),
            								"color" : nexacro.ColorObject("#c1c1c1")
            							}
            						}
            					},
            					"cellprogressbar" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#787878"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#787878"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Calendar" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cbcbcb")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #555555"),
            						"color" : nexacro.ColorObject("#222222")
            					}
            				},
            				"class" :
            				[
            					{
            						"cal_WF_TypeMonth" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"cal_WF_Essential" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #f44528")
            								}
            							}
            						}
            					}
            				]
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
            								"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#c1c1c1")
            							},
            							"invalidtext" :
            							{
            								"color" : nexacro.ColorObject("#f44528")
            							}
            						}
            					},
            					"cellcalendar" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 3px")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#c1c1c1")
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 3px")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#c1c1c1")
            									}
            								}
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
            								"border" : nexacro.BorderObject("0px none , 0px none , 0px none , 1px solid #9c9c9c"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_TypeSpnUp.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_TypeSpnUpM.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_TypeSpnUpM.png\")")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none , 0px none , 0px none , 1px solid #cbcbcb"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_TypeSpnUpD.png\")")
            							}
            						}
            					},
            					"cellcalendar" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none , 0px none , 0px none , 1px solid #9c9c9c"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtn.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtnM.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtnM.png\")")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("0px none , 0px none , 0px none , 1px solid #cbcbcb"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtnD.png\")")
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none , 0px none , 0px none , 1px solid #9c9c9c"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtn.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtnM.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtnM.png\")")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("0px none , 0px none , 0px none , 1px solid #cbcbcb"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnUpBtnD.png\")")
            									}
            								}
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
            								"border" : nexacro.BorderObject("1px solid #9c9c9c , 0px none , 0px none , 1px solid #9c9c9c"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_TypeSpnDn.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_TypeSpnDnM.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_TypeSpnDnM.png\")")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cbcbcb , 0px none , 0px none , 1px solid #cbcbcb"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_TypeSpnDnD.png\")")
            							}
            						}
            					},
            					"cellcalendar" :
            					{
            						"parent" :
            						{
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #9c9c9c , 0px none , 0px none , 1px solid #9c9c9c"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtn.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtnM.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtnM.png\")")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #cbcbcb , 0px none , 0px none , 1px solid #cbcbcb"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtnD.png\")")
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #9c9c9c , 0px none , 0px none , 1px solid #9c9c9c"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtn.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtnM.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtnM.png\")")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #cbcbcb , 0px none , 0px none , 1px solid #cbcbcb"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_SpnDnBtnD.png\")")
            									}
            								}
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
            						"border" : nexacro.BorderObject("1px solid #9c9c9c")
            					}
            				}
            			},
            			"prevbutton" :
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
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_PrevBtn.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_PrevBtnM.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_PrevBtnM.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_PrevBtnD.png\")")
            									}
            								}
            							}
            						}
            					},
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #d6d6d6"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_PrevBtn.png\")"),
            								"padding" : nexacro.PaddingObject("2px 3px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_PrevBtnM.png\")")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("1px solid #666666"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_PrevBtnP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_PrevBtnD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"nextbutton" :
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
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_NxtBtn.png\")")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_NxtBtnM.png\")")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_NxtBtnM.png\")")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_WF_NxtBtnD.png\")")
            									}
            								}
            							}
            						}
            					},
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #d6d6d6"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_NxtBtn.png\")"),
            								"padding" : nexacro.PaddingObject("2px 3px")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_NxtBtnM.png\")")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("1px solid #666666"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_NxtBtnP.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_NxtBtnD.png\")")
            							}
            						}
            					}
            				}
            			},
            			"yearstatic" :
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
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"monthstatic" :
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
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
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
            										"color" : nexacro.ColorObject("#30373b")
            									},
            									"saturday" :
            									{
            										"color" : nexacro.ColorObject("#252abf")
            									},
            									"sunday" :
            									{
            										"color" : nexacro.ColorObject("#ff5a00")
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
            									"selected" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
            									},
            									"mouseover" :
            									{
            									},
            									"today" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									},
            									"saturday" :
            									{
            										"color" : nexacro.ColorObject("#252abf")
            									},
            									"sunday" :
            									{
            										"color" : nexacro.ColorObject("#ff5a00")
            									},
            									"trailingday" :
            									{
            										"color" : nexacro.ColorObject("#c2c4c6")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Grid" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #293943")
            					}
            				},
            				"class" :
            				[
            					{
            						"grd_WF_Tree" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					}
            				]
            			},
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
            												"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            												"color" : nexacro.ColorObject("#ffffff")
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
            												"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            												"padding" : nexacro.PaddingObject("2px")
            											},
            											"mouseover" :
            											{
            											},
            											"selected" :
            											{
            											},
            											"blinked" :
            											{
            												"color" : nexacro.ColorObject("#ffffff")
            											}
            										},
            										"class" :
            										[
            											{
            												"grd_WF_Tree" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none,0px none,1px solid #546169"),
            															"color" : nexacro.ColorObject("#ffffff")
            														}
            													}
            												}
            											}
            										]
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
            												"border" : nexacro.BorderObject("0px none, 1px solid #cbcbcb , 0px none , 0px none"),
            												"color" : nexacro.ColorObject("#ffffff"),
            												"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
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
            										"border" : nexacro.BorderObject("0px none"),
            										"color" : nexacro.ColorObject("#222222"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"color" : nexacro.ColorObject("#222222"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"color" : nexacro.ColorObject("#222222"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"color" : nexacro.ColorObject("#222222"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
            										"border" : nexacro.BorderObject("0px none"),
            										"color" : nexacro.ColorObject("#222222"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"color" : nexacro.ColorObject("#222222"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"color" : nexacro.ColorObject("#222222"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"color" : nexacro.ColorObject("#222222"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
            									}
            								}
            							}
            						}
            					}
            				},
            				"class" :
            				[
            					{
            						"cell_WF_Noline" :
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
            															"border" : nexacro.BorderObject("0px none , 0px none , 1px solid #cbcbcb , 0px none")
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
            						"cell_WF_ExprW" :
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
            															"color" : nexacro.ColorObject("#3da2df"),
            															"font" : nexacro.FontObject("bold italic 12px \"Malgun Gothic\"")
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
            						"cell_WF_ExprM" :
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
            															"color" : nexacro.ColorObject("#1b6e44"),
            															"font" : nexacro.FontObject("bold italic 12px \"Malgun Gothic\"")
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
            						"lstv_WF_BdyCName" :
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
            													"font" : nexacro.FontObject("bold 20px \"Malgun Gothic\"")
            												},
            												"disabled" :
            												{
            													"font" : nexacro.FontObject("bold 20px \"Malgun Gothic\"")
            												},
            												"focused" :
            												{
            													"font" : nexacro.FontObject("bold 20px \"Malgun Gothic\"")
            												},
            												"mouseover" :
            												{
            													"font" : nexacro.FontObject("bold 20px \"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstv_WF_BdyCId" :
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
            													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
            												},
            												"disabled" :
            												{
            													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
            												},
            												"focused" :
            												{
            													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
            												},
            												"mouseover" :
            												{
            													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstv_WF_BdyCGender" :
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
            													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            												},
            												"disabled" :
            												{
            													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            												},
            												"focused" :
            												{
            													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            												},
            												"mouseover" :
            												{
            													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstv_WF_BdyCLabel" :
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
            													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
            												},
            												"disabled" :
            												{
            													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
            												},
            												"focused" :
            												{
            													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
            												},
            												"mouseover" :
            												{
            													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstv_WF_BdyCValue" :
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
            													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            												},
            												"disabled" :
            												{
            													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            												},
            												"focused" :
            												{
            													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            												},
            												"mouseover" :
            												{
            													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstv_WF_DtailCLabel" :
            						{
            							"parent" :
            							{
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
            													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
            												},
            												"disabled" :
            												{
            													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
            												},
            												"focused" :
            												{
            													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
            												},
            												"mouseover" :
            												{
            													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstv_WF_DtailCValue" :
            						{
            							"parent" :
            							{
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
            													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            												},
            												"disabled" :
            												{
            													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            												},
            												"focused" :
            												{
            													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            												},
            												"mouseover" :
            												{
            													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"cell_WF_Level1" :
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
            													"class" :
            													[
            														{
            															"grd_WF_Tree" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"color" : nexacro.ColorObject("#b5bdce")
            																	}
            																}
            															}
            														}
            													]
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				]
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
            										"border" : nexacro.BorderObject("2px solid #6f56f1")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"cellbutton" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c2c2c2"),
            								"color" : nexacro.ColorObject("#555555"),
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #d9d9d9"),
            								"color" : nexacro.ColorObject("#bbbbbb")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #a0a0a0")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c2c2c2")
            							}
            						}
            					},
            					"cell" :
            					{
            						"class" :
            						[
            							{
            								"cell_WF_UploadBtn" :
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
            																	"border" : nexacro.BorderObject("0px none"),
            																	"color" : nexacro.ColorObject("#ffffff"),
            																	"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
            																	"padding" : nexacro.PaddingObject("0px 28px 0px 50px")
            																},
            																"mouseover" :
            																{
            																	"border" : nexacro.BorderObject("0px none"),
            																	"color" : nexacro.ColorObject("#ffffff"),
            																	"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
            																	"padding" : nexacro.PaddingObject("0px 28px 0px 50px")
            																},
            																"pushed" :
            																{
            																	"border" : nexacro.BorderObject("0px none"),
            																	"color" : nexacro.ColorObject("#ffffff"),
            																	"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
            																	"padding" : nexacro.PaddingObject("0px 28px 0px 50px")
            																},
            																"disabled" :
            																{
            																	"border" : nexacro.BorderObject("0px none"),
            																	"color" : nexacro.ColorObject("#ffffff"),
            																	"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
            																	"padding" : nexacro.PaddingObject("0px 28px 0px 50px")
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
            								"cell_WF_DnloadBtn" :
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
            																	"border" : nexacro.BorderObject("0px none"),
            																	"color" : nexacro.ColorObject("#ffffff"),
            																	"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
            																	"padding" : nexacro.PaddingObject("0px 28px 0px 50px")
            																},
            																"mouseover" :
            																{
            																	"border" : nexacro.BorderObject("0px none"),
            																	"color" : nexacro.ColorObject("#ffffff"),
            																	"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
            																	"padding" : nexacro.PaddingObject("0px 28px 0px 50px")
            																},
            																"pushed" :
            																{
            																	"border" : nexacro.BorderObject("0px none"),
            																	"color" : nexacro.ColorObject("#ffffff"),
            																	"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
            																	"padding" : nexacro.PaddingObject("0px 28px 0px 50px")
            																},
            																"disabled" :
            																{
            																	"border" : nexacro.BorderObject("0px none"),
            																	"color" : nexacro.ColorObject("#ffffff"),
            																	"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
            																	"padding" : nexacro.PaddingObject("0px 28px 0px 50px")
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
            						]
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c2c2c2"),
            								"color" : nexacro.ColorObject("#555555"),
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #a0a0a0")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #a0a0a0")
            							},
            							"pushed" :
            							{
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #d9d9d9"),
            								"color" : nexacro.ColorObject("#bbbbbb")
            							}
            						}
            					}
            				}
            			},
            			"cellcheckbox" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_Box.png\")"),
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxD.png\")"),
            								"color" : nexacro.ColorObject("#c1c1c1")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxM.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxS.png\")")
            							},
            							"mouseover_selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxMS.png\")")
            							},
            							"disabled_selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxDS.png\")"),
            								"color" : nexacro.ColorObject("#c1c1c1")
            							}
            						}
            					},
            					"cell" :
            					{
            						"class" :
            						[
            							{
            								"cell_WF_RdoType" :
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
            																	"icon" : nexacro.UrlObject("url('theme://images/cell_WF_RdoType.png')"),
            																	"iconPosition" : "left",
            																	"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px"),
            																	"color" : nexacro.ColorObject("#222222"),
            																	"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
            																},
            																"disabled" :
            																{
            																	"icon" : nexacro.UrlObject("URL(\"theme://images/cell_WF_RdoTypeD.png\")"),
            																	"color" : nexacro.ColorObject("#c1c1c1")
            																},
            																"mouseover" :
            																{
            																	"icon" : nexacro.UrlObject("URL(\"theme://images/cell_WF_RdoTypeM.png\")")
            																},
            																"selected" :
            																{
            																	"icon" : nexacro.UrlObject("URL(\"theme://images/cell_WF_RdoTypeS.png\")")
            																},
            																"mouseover_selected" :
            																{
            																	"icon" : nexacro.UrlObject("URL(\"theme://images/cell_WF_RdoTypeMS.png\")")
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
            						]
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_Box.png\")"),
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxD.png\")"),
            								"color" : nexacro.ColorObject("#c1c1c1")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxM.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxS.png\")")
            							},
            							"mouseover_selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxMS.png\")")
            							}
            						}
            					}
            				}
            			},
            			"cellcalendar" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9c9c9c")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cbcbcb")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9c9c9c")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cbcbcb")
            							}
            						}
            					}
            				}
            			},
            			"celledit" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            								"padding" : nexacro.PaddingObject("0px 8px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            								"color" : nexacro.ColorObject("#c1c1c1")
            							}
            						}
            					},
            					"cell" :
            					{
            						"class" :
            						[
            							{
            								"cell_WF_EdiEssential" :
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
            																	"border" : nexacro.BorderObject("1px solid #f44528"),
            																	"padding" : nexacro.PaddingObject("0px 8px"),
            																	"color" : nexacro.ColorObject("#222222"),
            																	"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
            						]
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            								"color" : nexacro.ColorObject("#c1c1c1")
            							}
            						}
            					}
            				}
            			},
            			"cellmaskedit" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            								"padding" : nexacro.PaddingObject("0px 8px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            								"color" : nexacro.ColorObject("#c1c1c1")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            								"padding" : nexacro.PaddingObject("0px 8px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            								"color" : nexacro.ColorObject("#c1c1c1")
            							}
            						}
            					}
            				}
            			},
            			"celltextarea" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            								"padding" : nexacro.PaddingObject("3px"),
            								"color" : nexacro.ColorObject("#222222"),
            								"font" : nexacro.FontObject("12px/18px \"Malgun Gothic\""),
            								"wordWrap" : "char"
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            								"color" : nexacro.ColorObject("#c1c1c1")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            								"padding" : nexacro.PaddingObject("3px"),
            								"color" : nexacro.ColorObject("#222222"),
            								"font" : nexacro.FontObject("12px/18px \"Malgun Gothic\""),
            								"wordWrap" : "char"
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            								"color" : nexacro.ColorObject("#c1c1c1")
            							}
            						}
            					}
            				}
            			},
            			"cellexpandbutton" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_CellExpBtn.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_CellExpBtnP.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_CellExpBtnP.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_CellExpBtnP.png\")")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_CellExpBtn.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_CellExpBtnP.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_CellExpBtnP.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_CellExpBtnP.png\")")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"cellprogressbar" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            								"padding" : nexacro.PaddingObject("1px 0px")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            								"padding" : nexacro.PaddingObject("1px 0px")
            							}
            						}
            					}
            				}
            			},
            			"cellcombo" :
            			{
            				"parent" :
            				{
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9c9c9c")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cbcbcb")
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9c9c9c")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cbcbcb")
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
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeExpBtn.png\")")
            									},
            									"collapse" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeCollBtn.png\")")
            									}
            								}
            							},
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
            														"class" :
            														[
            															{
            																"grd_WF_Rtl" :
            																{
            																	"self" :
            																	{
            																		"expand" :
            																		{
            																			"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeExpBtnRTL.png\")")
            																		},
            																		"collapse" :
            																		{
            																			"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeCollBtnRTL.png\")")
            																		}
            																	}
            																}
            															},
            															{
            																"grd_WF_Tree" :
            																{
            																	"self" :
            																	{
            																		"collapse" :
            																		{
            																			"icon" : nexacro.UrlObject("url('theme://images/grd_LF_TreeCollBtn.png')")
            																		},
            																		"expand" :
            																		{
            																			"icon" : nexacro.UrlObject("url('theme://images/grd_LF_TreeExpBtn.png')")
            																		}
            																	}
            																}
            															}
            														]
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
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeImg.png\")")
            									},
            									"collapse" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/grd_WF_TreeCollImg.png')")
            									},
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/grd_WF_TreeExpImg.png')")
            									}
            								}
            							},
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
            														"class" :
            														[
            															{
            																"grd_WF_Rtl" :
            																{
            																	"self" :
            																	{
            																		"enabled" :
            																		{
            																			"icon" : nexacro.UrlObject("URL(\"theme://images/grd_WF_TreeimgRTL.png\")")
            																		},
            																		"collapse" :
            																		{
            																			"icon" : nexacro.UrlObject("url('theme://images/grd_WF_TreeCollImgLTR.png')"),
            																			"rtlIcon" : nexacro.UrlObject("URL('theme://images/grd_WF_TreeCollImgRTL.png')")
            																		},
            																		"expand" :
            																		{
            																			"icon" : nexacro.UrlObject("url('theme://images/grd_WF_TreeExpImgLTR.png')"),
            																			"rtlIcon" : nexacro.UrlObject("URL('theme://images/grd_WF_TreeExpImgRTL.png')")
            																		}
            																	}
            																}
            															}
            														]
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
            							"GridCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_Box.png\")"),
            										"textPadding" : nexacro.PaddingObject("0px 6px")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxD.png\")"),
            										"color" : nexacro.ColorObject("#c1c1c1")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxM.png\")")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxS.png\")")
            									},
            									"mouseover_selected" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/chk_WF_BoxMS.png\")")
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
            								"border" : nexacro.BorderObject("1px solid #f44528 , 1px solid #9c9c9c , 1px solid #9c9c9c")
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
            								"border" : nexacro.BorderObject("1px solid #9c9c9c , 1px solid #9c9c9c , 1px solid #f44528,1px solid #9c9c9c"),
            								"font" : nexacro.FontObject("12px \"Malgun Gothic\""),
            								"padding" : nexacro.PaddingObject("5px 10px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9c9c9c , 1px solid #9c9c9c , 1px solid #f44528,1px solid #9c9c9c"),
            								"color" : nexacro.ColorObject("#f44528")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528"),
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cbcbcb , 1px solid #cbcbcb , 1px solid #f44528,1px solid #cbcbcb"),
            								"color" : nexacro.ColorObject("#c1c1c1")
            							}
            						}
            					}
            				},
            				"class" :
            				[
            					{
            						"tab_WF_BtnItem" :
            						{
            							"parent" :
            							{
            								"Tab" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid #555a5e"),
            											"padding" : nexacro.PaddingObject("3px 5px"),
            											"color" : nexacro.ColorObject("#ffffff"),
            											"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
            										},
            										"mouseover" :
            										{
            											"color" : nexacro.ColorObject("#555a5e")
            										},
            										"selected" :
            										{
            											"border" : nexacro.BorderObject("1px solid #055a70")
            										},
            										"disabled" :
            										{
            										}
            									}
            								}
            							}
            						}
            					}
            				]
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
            										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_ExtraBtn.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 20px")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_ExtraBtn.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 20px")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_WF_ExtraBtn.png\")"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 20px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"FileUpload" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f2f2f2")
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
            										"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            										"padding" : nexacro.PaddingObject("8px")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #cf270b")
            									},
            									"pushed" :
            									{
            										"border" : nexacro.BorderObject("1px solid #cf270b")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            										"color" : nexacro.ColorObject("#c1c1c1")
            									}
            								}
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
            										"border" : nexacro.BorderObject("1px solid #9c9c9c")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #9c9c9c")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #9c9c9c")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            										"color" : nexacro.ColorObject("#c1c1c1"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
            						"border" : nexacro.BorderObject("1px solid #9c9c9c")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cf270b")
            					},
            					"pushed" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cf270b")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            						"color" : nexacro.ColorObject("#c1c1c1"),
            						"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
            					}
            				}
            			},
            			"StepControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"padding" : nexacro.PaddingObject("0px 0px 5px 0px")
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
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemM.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_WF_ItemMS.png\")")
            							}
            						}
            					}
            				}
            			},
            			"ListView" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            						"color" : nexacro.ColorObject("#c1c1c1")
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
            								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d6d6d6,0px none")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d6d6d6,0px none")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d6d6d6,0px none")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d6d6d6,0px none")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d6d6d6,0px none")
            							},
            							"selected" :
            							{
            							}
            						}
            					}
            				},
            				"class" :
            				[
            					{
            						"lstv_WF_BdyFormat1" :
            						{
            							"parent" :
            							{
            								"ListView" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid #ffffff,1px solid #ffffff,1px solid #d6d6d6,1px solid #ffffff")
            										},
            										"focused" :
            										{
            											"border" : nexacro.BorderObject("1px solid #ffffff,1px solid #ffffff,1px solid #d6d6d6,1px solid #ffffff")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("1px solid #ffffff,1px solid #ffffff,1px solid #d6d6d6,1px solid #ffffff")
            										},
            										"readonly" :
            										{
            											"border" : nexacro.BorderObject("1px solid #ffffff,1px solid #ffffff,1px solid #d6d6d6,1px solid #ffffff")
            										},
            										"disabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid #ffffff,1px solid #ffffff,1px solid #d6d6d6,1px solid #ffffff")
            										},
            										"selected" :
            										{
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstv_WF_BdyFormat2" :
            						{
            							"parent" :
            							{
            								"ListView" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid #ffffff")
            										},
            										"focused" :
            										{
            											"border" : nexacro.BorderObject("1px solid #ffffff")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("1px solid #ffffff")
            										},
            										"readonly" :
            										{
            											"border" : nexacro.BorderObject("1px solid #ffffff")
            										},
            										"disabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid #ffffff")
            										},
            										"selected" :
            										{
            										}
            									}
            								}
            							}
            						}
            					}
            				]
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
            										"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            										"icon" : nexacro.UrlObject("url('theme://images/lstv_WF_ExpanbarCollicon.png')")
            									},
            									"collapse" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/lstv_WF_ExpanbarCollicon.png')")
            									},
            									"expand" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/lstv_WF_ExpanbarExpicon.png')")
            									}
            								}
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
            								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d6d6d6,0px none")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d6d6d6,0px none")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d6d6d6,0px none")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d6d6d6,0px none")
            							},
            							"selected" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"vscrollbar" :
            			{
            				"parent" :
            				{
            					"ListView" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #9b9c9c"),
            								"padding" : nexacro.PaddingObject("3px 1px")
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
        imgcache[nexacro._getImageLocation("theme://images/scl_WF_VInc.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_VIncM.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_VIncP.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_VDec.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_VDecM.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_VDecP.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_HInc.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_HIncM.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_HIncP.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_HDec.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_HDecM.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_HDecP.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Min.png")] = { width:11, height:2 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_MinP.png")] = { width:11, height:2 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_MinD.png")] = { width:11, height:2 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Max.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_MaxP.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_MaxD.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Normal.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_NormalP.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_NormalD.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Close.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_CloseP.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_CloseD.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/img_SB_Grip.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxD.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxM.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxS.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxMS.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxDS.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_UpbtnN.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_UpbtnP.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_UpbtnD.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_DnbtnN.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_DnbtnP.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_DnbtnD.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/cbo_WF_Drop.png")] = { width:9, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/cbo_WF_DropP.png")] = { width:9, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/cbo_WF_DropD.png")] = { width:9, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Item.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemD.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemM.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemMS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemDS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_Expand.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_ChkIcon.png")] = { width:11, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/pgb_WF_Image.png")] = { width:12, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/pgb_WF_ImageD.png")] = { width:12, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_Drop.png")] = { width:16, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_DropP.png")] = { width:16, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_DropD.png")] = { width:16, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnUp.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnUpM.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnUpD.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnDn.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnDnM.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnDnD.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_PrevBtn.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_PrevBtnM.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_PrevBtnD.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_NxtBtn.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_NxtBtnM.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_NxtBtnD.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnUpBtn.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnUpBtnM.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnUpBtnD.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnDnBtn.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnDnBtnM.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnDnBtnD.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_CellExpBtn.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_CellExpBtnP.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeExpBtn.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeCollBtn.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeImg.png")] = { width:9, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeCollImg.png")] = { width:14, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeExpImg.png")] = { width:16, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeExpBtnRTL.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeCollBtnRTL.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeimgRTL.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeCollImgLTR.png")] = { width:14, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeCollImgRTL.png")] = { width:14, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeExpImgLTR.png")] = { width:14, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeExpImgRTL.png")] = { width:14, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/cell_WF_UploadBtn.png")] = { width:28, height:28 };
        		imgcache[nexacro._getImageLocation("theme://images/cell_WF_DnloadBtn.png")] = { width:28, height:28 };
        		imgcache[nexacro._getImageLocation("theme://images/cell_WF_RdoType.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cell_WF_RdoTypeD.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cell_WF_RdoTypeM.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cell_WF_RdoTypeS.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cell_WF_RdoTypeMS.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_ExtraBtn.png")] = { width:7, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_PrevBtn.png")] = { width:4, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_PrevBtnM.png")] = { width:4, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_PrevBtnP.png")] = { width:4, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_PrevBtnD.png")] = { width:4, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_NxtBtn.png")] = { width:4, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_NxtBtnM.png")] = { width:4, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_NxtBtnP.png")] = { width:4, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_NxtBtnD.png")] = { width:4, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_ExpanbarCollicon.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_ExpanbarExpicon.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_LtrLogout.png")] = { width:41, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_RtlLogout.png")] = { width:41, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeCollBtn.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeExpBtn.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Home.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Edge.png")] = { width:100, height:50 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Save.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_SaveP.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_CellDelete.png")] = { width:33, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_CellNew.png")] = { width:33, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_CellSave.png")] = { width:33, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_CellSearch.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_ImgAvata.png")] = { width:98, height:145 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_ImgFrozen.png")] = { width:98, height:145 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_ImgInception.png")] = { width:98, height:145 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_ImgIronman.png")] = { width:98, height:140 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_ImgStarwars.png")] = { width:96, height:145 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_ImgTitanic.png")] = { width:98, height:140 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_RepeatX.png")] = { width:2, height:48 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_SampleNexacro.png")] = { width:126, height:125 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp10.png")] = { width:128, height:128 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp11.png")] = { width:128, height:128 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp12.png")] = { width:128, height:128 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp13.png")] = { width:128, height:128 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp14.png")] = { width:128, height:128 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp15.png")] = { width:128, height:128 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp16.png")] = { width:128, height:128 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp17.png")] = { width:128, height:128 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp18.png")] = { width:128, height:128 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp19.png")] = { width:128, height:128 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Emp20.png")] = { width:128, height:128 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_ExprM.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_ExprW.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_EdgeSampleImg.png")] = { width:15, height:21 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_MDI_ExtraBtn.png")] = { width:7, height:7 };
	};
}
)();
