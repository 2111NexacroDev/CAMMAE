package org.kh.campus.support.service;

import java.util.List;

import org.kh.campus.support.domain.Support;

public interface SupportService {

	public List<Support> printAllSupport();
	public int insertSuport(Support support);


}
