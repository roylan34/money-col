import ManualRepository from '../../ports/ManualRepository';

import {
  buildFetchRecommendedManuals,
  fetchRecommendedManualsUseCase,
} from './fetch-recommended';
import {
  buildFetchMultipleManuals,
  fetchMultipleManualsUseCase,
} from './fetch-multiple-manuals';
import { buildFetchManuals, fetchManualsUseCase } from './fetch-manuals';
import { buildAddManual, addManualUseCase } from './add-manual';
import { buildUpdateManual, updateManualUseCase } from './update-manual';
import {
  buildRemoveManualsById,
  removeManualsByIdUseCase,
} from './remove-manuals-by-id';

export default (dependencies: {
  manualRepo: ManualRepository;
}): {
  addManual: addManualUseCase;

  fetchRecommendedManuals: fetchRecommendedManualsUseCase;
  fetchMultipleManualsById: fetchMultipleManualsUseCase;
  fetchManuals: fetchManualsUseCase;
  updateManual: updateManualUseCase;
  removeManualsById: removeManualsByIdUseCase;
} => {
  const { manualRepo } = dependencies;

  const fetchRecommendedManuals = buildFetchRecommendedManuals({
    manualRepo,
  });

  const fetchMultipleManualsById = buildFetchMultipleManuals({ manualRepo });

  const fetchManuals = buildFetchManuals({ manualRepo });

  const addManual = buildAddManual({
    manualRepo,
  });

  const updateManual = buildUpdateManual({ manualRepo });

  const removeManualsById = buildRemoveManualsById({ manualRepo });

  return {
    fetchRecommendedManuals,
    fetchMultipleManualsById,
    fetchManuals,
    addManual,
    updateManual,
    removeManualsById,
  };
};
