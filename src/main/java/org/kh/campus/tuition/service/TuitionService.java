package org.kh.campus.tuition.service;

import java.util.HashMap;
import java.util.List;

import org.kh.campus.tuition.domain.Tuition;

public interface TuitionService {

	public List<Tuition> printTuition(String uniCode);

	public int registerTuition(Tuition tuition);

	public List<Tuition> printAllList(HashMap<String, String> search);

	public int updateTuition(Tuition tuition);

	public List<Tuition> printOneList(HashMap<String, String> search);

}
