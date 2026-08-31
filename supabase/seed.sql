-- Données de référence : numéros d'urgence (fiables, sans dépendance externe).

insert into emergency_contacts (label, phone, category, scope, description, sort_order) values
  ('SAMU',                       '15',           'medical',  'national', 'Aide médicale urgente', 1),
  ('Pompiers',                   '18',           'secours',  'national', 'Incendie et secours', 2),
  ('Police / Gendarmerie',       '17',           'securite', 'national', 'Police secours', 3),
  ('Numéro d''urgence européen', '112',          'medical',  'national', 'Depuis un mobile, partout en Europe', 4),
  ('Urgence pour personnes sourdes ou malentendantes', '114', 'medical', 'national', 'Par SMS ou fax', 5),
  ('SOS Médecins Martinique',    '0810 37 39 72','medical',  'local',    'Consultations et visites d''urgence', 6),
  ('Centre antipoison',          '0800 59 59 59','medical',  'national', 'Antilles-Guyane', 7),
  ('Sauvetage en mer (CROSS AG)','196',          'secours',  'national', 'Urgences en mer', 8),
  ('Violences femmes info',      '3919',         'social',   'national', 'Écoute et orientation', 9),
  ('SOS Amitié',                 '09 72 39 40 50','social',  'national', 'Souffrance psychique, 24h/24', 10)
on conflict do nothing;
