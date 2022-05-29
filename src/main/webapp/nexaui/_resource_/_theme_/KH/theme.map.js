(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "Button" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            						"letterSpacing" : nexacro.CSSValueObject("3px")
            					},
            					"disabled" :
            					{
            					},
            					"pushed" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528"),
            						"color" : nexacro.ColorObject("#ffffff")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528")
            					}
            				},
            				"class" :
            				[
            					{
            						"btn_TF_Delete" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Save" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #edada2"),
            									"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Save.png')"),
            									"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px"),
            									"color" : nexacro.ColorObject("#a1210b"),
            									"letterSpacing" : nexacro.CSSValueObject("0px")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_Add" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #263a7d"),
            									"color" : nexacro.ColorObject("#ffffff")
            								}
            							}
            						}
            					}
            				]
            			},
            			"Form" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"color" : nexacro.ColorObject("#222222"),
            						"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
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
            								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_Drop.png')")
            							}
            						}
            					},
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_Drop.png')")
            							}
            						}
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
            								"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
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
            								"border" : nexacro.BorderObject("1px solid #9c9c9c")
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
            										"color" : nexacro.ColorObject("red"),
            										"padding" : nexacro.PaddingObject("5px 0px 5px 10px")
            									}
            								}
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
            						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box.png')"),
            						"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            					},
            					"mouseover" :
            					{
            						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxM.png')")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxS.png')")
            					},
            					"mouseover_selected" :
            					{
            						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxMS.png')")
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
            								"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            							}
            						}
            					}
            				}
            			},
            			"datepicker" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9c9c9c")
            							}
            						}
            					}
            				}
            			},
            			"spinedit" :
            			{
            				"parent" :
            				{
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"datepicker" :
            									{
            										"parent" :
            										{
            											"Calendar" :
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
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"datepicker" :
            									{
            										"parent" :
            										{
            											"Calendar" :
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
            					}
            				}
            			},
            			"spindownbutton" :
            			{
            				"parent" :
            				{
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"datepicker" :
            									{
            										"parent" :
            										{
            											"Calendar" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnDnBtn.png')")
            													}
            												}
            											}
            										}
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
            									"datepicker" :
            									{
            										"parent" :
            										{
            											"Calendar" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnDnBtn.png')")
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
            			"spinupbutton" :
            			{
            				"parent" :
            				{
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"datepicker" :
            									{
            										"parent" :
            										{
            											"Calendar" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnUpBtn.png')")
            													}
            												}
            											}
            										}
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
            									"datepicker" :
            									{
            										"parent" :
            										{
            											"Calendar" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"icon" : nexacro.UrlObject("url('theme://images/cal_WF_SpnUpBtn.png')")
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
            			"monthstatic" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"datepicker" :
            							{
            								"parent" :
            								{
            									"Calendar" :
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
            							"datepicker" :
            							{
            								"parent" :
            								{
            									"Calendar" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_NxtBtn.png')")
            											}
            										}
            									}
            								}
            							}
            						}
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
            							"datepicker" :
            							{
            								"parent" :
            								{
            									"Calendar" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"icon" : nexacro.UrlObject("url('theme://images/cal_WF_PrevBtn.png')")
            											}
            										}
            									}
            								}
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
            							"datepicker" :
            							{
            								"parent" :
            								{
            									"Calendar" :
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
            							"datepicker" :
            							{
            								"parent" :
            								{
            									"Calendar" :
            									{
            										"self" :
            										{
            											"trailingday" :
            											{
            												"color" : nexacro.ColorObject("darkgray")
            											},
            											"mouseover" :
            											{
            											},
            											"saturday" :
            											{
            												"color" : nexacro.ColorObject("blue")
            											},
            											"sunday" :
            											{
            												"color" : nexacro.ColorObject("red")
            											},
            											"selected" :
            											{
            												"color" : nexacro.ColorObject("#ffffff"),
            												"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\"")
            											},
            											"today" :
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
            			"weekitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"datepicker" :
            							{
            								"parent" :
            								{
            									"Calendar" :
            									{
            										"self" :
            										{
            											"saturday" :
            											{
            												"color" : nexacro.ColorObject("blue")
            											},
            											"sunday" :
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
            			},
            			"Grid" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c")
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
            												"color" : nexacro.ColorObject("#ffffff"),
            												"border" : nexacro.BorderObject("1px solid lightgray")
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
            												"border" : nexacro.BorderObject("1px solid lightgray")
            											},
            											"mouseover" :
            											{
            											},
            											"selected" :
            											{
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
            												"color" : nexacro.ColorObject("#ffffff"),
            												"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\""),
            												"border" : nexacro.BorderObject("1px solid lightgray")
            											}
            										}
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
            					"GridCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_Box.png')")
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
            								"border" : nexacro.BorderObject("1px solid teal")
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
            								"border" : nexacro.BorderObject("1px solid #9c9c9c")
            							}
            						}
            					},
            					"cell" :
            					{
            						"class" :
            						[
            							{
            								"cell_WF_Ess" :
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
            																	"border" : nexacro.BorderObject("1px solid orangered")
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
            					}
            				}
            			}
		},
		{
            "includeStatusMap" : true
		}
		);
		var imgcache = nexacro._getImageCacheMaps();
        imgcache[nexacro._getImageLocation("theme://images/btn_WF_Save.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/img_WF_RepeatX.png")] = { width:2, height:48 };
        		imgcache[nexacro._getImageLocation("theme://images/cbo_WF_Drop.png")] = { width:9, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxM.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxS.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxMS.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_Drop.png")] = { width:16, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnDnBtn.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnUpBtn.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_NxtBtn.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_PrevBtn.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Home.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Close.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_CloseD.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_CloseP.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Max.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_MaxD.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_MaxP.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Min.png")] = { width:11, height:2 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_MinD.png")] = { width:11, height:2 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_MinP.png")] = { width:11, height:2 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Normal.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_NormalD.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_TF_NormalP.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Edge.png")] = { width:100, height:50 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_LtrLogout.png")] = { width:41, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_RtlLogout.png")] = { width:41, height:30 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_WF_SaveP.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_DropD.png")] = { width:16, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_DropP.png")] = { width:16, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_NxtBtnD.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_NxtBtnM.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_PrevBtnD.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_PrevBtnM.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnDnBtnD.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnDnBtnM.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnUpBtnD.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_SpnUpBtnM.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnDn.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnDnD.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnDnM.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnUp.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnUpD.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/cal_WF_TypeSpnUpM.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/cbo_WF_DropD.png")] = { width:9, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/cbo_WF_DropP.png")] = { width:9, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/cell_WF_DnloadBtn.png")] = { width:28, height:28 };
        		imgcache[nexacro._getImageLocation("theme://images/cell_WF_RdoType.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cell_WF_RdoTypeD.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cell_WF_RdoTypeM.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cell_WF_RdoTypeMS.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cell_WF_RdoTypeS.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/cell_WF_UploadBtn.png")] = { width:28, height:28 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxD.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxDS.png")] = { width:15, height:15 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeCollBtn.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeExpBtn.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_CellDelete.png")] = { width:33, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_CellExpBtn.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_CellExpBtnP.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_CellNew.png")] = { width:33, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_CellSave.png")] = { width:33, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_CellSearch.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_ImgAvata.png")] = { width:98, height:145 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_ImgFrozen.png")] = { width:98, height:145 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_ImgInception.png")] = { width:98, height:145 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_ImgIronman.png")] = { width:98, height:140 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_ImgStarwars.png")] = { width:96, height:145 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_ImgTitanic.png")] = { width:98, height:140 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeCollBtn.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeCollBtnRTL.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeCollImg.png")] = { width:14, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeCollImgLTR.png")] = { width:14, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeCollImgRTL.png")] = { width:14, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeExpBtn.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeExpBtnRTL.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeExpImg.png")] = { width:16, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeExpImgLTR.png")] = { width:14, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeExpImgRTL.png")] = { width:14, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeImg.png")] = { width:9, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/grd_WF_TreeimgRTL.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/img_SB_Grip.png")] = { width:11, height:11 };
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
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_ExpanbarCollicon.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_ExpanbarExpicon.png")] = { width:17, height:17 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_ExprM.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_ExprW.png")] = { width:16, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/pgb_WF_Image.png")] = { width:12, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/pgb_WF_ImageD.png")] = { width:12, height:22 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_ChkIcon.png")] = { width:11, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_Expand.png")] = { width:5, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Item.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemD.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemDS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemM.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemMS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemS.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_HDec.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_HDecM.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_HDecP.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_HInc.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_HIncM.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_HIncP.png")] = { width:3, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_VDec.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_VDecM.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_VDecP.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_VInc.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_VIncM.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/scl_WF_VIncP.png")] = { width:5, height:3 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_DnbtnD.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_DnbtnN.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_DnbtnP.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_UpbtnD.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_UpbtnN.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/spn_WF_UpbtnP.png")] = { width:7, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/sta_WF_EdgeSampleImg.png")] = { width:15, height:21 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_MDI_ExtraBtn.png")] = { width:7, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_ExtraBtn.png")] = { width:7, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_NxtBtn.png")] = { width:4, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_NxtBtnD.png")] = { width:4, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_NxtBtnM.png")] = { width:4, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_NxtBtnP.png")] = { width:4, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_PrevBtn.png")] = { width:4, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_PrevBtnD.png")] = { width:4, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_PrevBtnM.png")] = { width:4, height:6 };
        		imgcache[nexacro._getImageLocation("theme://images/tab_WF_PrevBtnP.png")] = { width:4, height:6 };
	};
}
)();
