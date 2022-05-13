package org.kh.campus.tuition.service;

import java.util.List;

import org.kh.campus.tuition.domain.Tuition;

public interface TuitionService {

	public List<Tuition> printTuition(String uniCode);

}
