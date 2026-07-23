import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
    Scale, Shield, BookOpen, Flame, Star, Globe,
    ChevronDown, ChevronUp, Search, X, ArrowRight,
    AlertCircle, Info, Gavel, Users, Heart, BookMarked, Landmark
} from 'lucide-react';
import './PublicRights.css';

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const CATEGORIES = [
    { id: 'all', label: 'All Rights' },
    { id: 'general', label: 'General' },
    { id: 'equality', label: 'Equality' },
    { id: 'freedom', label: 'Freedom' },
    { id: 'exploit', label: 'Exploitation' },
    { id: 'religion', label: 'Religion' },
    { id: 'cultural', label: 'Cultural & Educational' },
    { id: 'saving', label: 'Saving of Laws' },
    { id: 'remedies', label: 'Constitutional Remedies' },
];

const ARTICLES = [
    // ── GENERAL ──────────────────────────────────────────────
    {
        id: 'art12', num: '12', category: 'general', omitted: false,
        title: 'Definition',
        simple: 'Defines what "the State" means for the purpose of Fundamental Rights. It covers the Government and Parliament of India, the Government and Legislature of each State, and all local or other authorities within Indian territory or under the control of the Government of India.',
        constitutional: 'In this Part, unless the context otherwise requires, "the State" includes the Government and Parliament of India and the Government and the Legislature of each of the States and all local or other authorities within the territory of India or under the control of the Government of India.',
        keywords: ['state', 'government', 'parliament', 'legislature', 'local authority'],
    },
    {
        id: 'art13', num: '13', category: 'general', omitted: false,
        title: 'Laws inconsistent with or in derogation of Fundamental Rights',
        simple: 'Any existing law that is inconsistent with a Fundamental Right is void to the extent of that inconsistency. The State shall not make any new law that takes away or reduces a Fundamental Right. A law made in violation of this protection is void to the extent of the violation.',
        constitutional: 'All laws in force in the territory of India immediately before the commencement of this Constitution, in so far as they are inconsistent with the provisions of this Part, shall, to the extent of such inconsistency, be void. The State shall not make any law which takes away or abridges the rights conferred by this Part and any law made in contravention of this clause shall, to the extent of the contravention, be void.',
        keywords: ['void', 'inconsistent', 'law', 'abridge', 'contravention'],
    },
    // ── EQUALITY ─────────────────────────────────────────────
    {
        id: 'art14', num: '14', category: 'equality', omitted: false,
        title: 'Equality before law',
        simple: 'Every person in India — citizen or non-citizen — is entitled to equality before the law and equal protection of the laws. No one can be treated more favourably or unfairly by the State without lawful justification.',
        constitutional: 'The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.',
        keywords: ['equality', 'equal protection', 'law', 'discrimination'],
    },
    {
        id: 'art15', num: '15', category: 'equality', omitted: false,
        title: 'Prohibition of discrimination on grounds of religion, race, caste, sex or place of birth',
        simple: 'The State shall not discriminate against any citizen solely on grounds of religion, race, caste, sex, or place of birth. Citizens cannot be subjected to certain disabilities or restrictions on these grounds alone in access to public places such as shops, restaurants, or wells. Special provisions are constitutionally permitted for women, children, socially and educationally backward classes, Scheduled Castes, Scheduled Tribes, and economically weaker sections.',
        constitutional: 'The State shall not discriminate against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them. No citizen shall, on grounds only of religion, race, caste, sex, place of birth or any of them, be subject to any disability, liability, restriction or condition with regard to access to shops, public restaurants, hotels and places of public entertainment or the use of wells, tanks, bathing ghats, roads and places of public resort maintained wholly or partly out of State funds or dedicated to the use of the general public.',
        keywords: ['discrimination', 'caste', 'religion', 'sex', 'place of birth', 'public places', 'reservation', 'backward'],
    },
    {
        id: 'art16', num: '16', category: 'equality', omitted: false,
        title: 'Equality of opportunity in matters of public employment',
        simple: 'Every citizen has equal opportunity to apply for government jobs. Discrimination in public employment on specified grounds is prohibited. The Constitution also permits certain reservation provisions for backward classes and Scheduled Castes and Tribes, subject to constitutional conditions.',
        constitutional: 'There shall be equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State. No citizen shall, on grounds only of religion, race, caste, sex, descent, place of birth, residence or any of them, be ineligible for, or discriminated against in respect of, any employment or office under the State.',
        keywords: ['employment', 'opportunity', 'government job', 'appointment', 'reservation', 'public office'],
    },
    {
        id: 'art17', num: '17', category: 'equality', omitted: false,
        title: 'Abolition of Untouchability',
        simple: '"Untouchability" is abolished and its practice in any form is forbidden. Anyone who enforces any disability arising from "Untouchability" commits an offence punishable under law.',
        constitutional: '"Untouchability" is abolished and its practice in any form is forbidden. The enforcement of any disability arising out of "Untouchability" shall be an offence punishable in accordance with law.',
        keywords: ['untouchability', 'abolition', 'discrimination', 'offence', 'dalit'],
    },
    {
        id: 'art18', num: '18', category: 'equality', omitted: false,
        title: 'Abolition of titles',
        simple: 'The State shall not confer any title except military or academic distinctions. Citizens shall not accept titles from foreign States. There are also constitutional restrictions on accepting presents, emoluments, or offices from foreign States without Parliament\'s consent.',
        constitutional: 'No title, not being a military or academic distinction, shall be conferred by the State. No citizen of India shall accept any title from any foreign State. No person who is not a citizen of India shall, while he holds any office of profit or trust under the State, accept without the consent of the President any title from any foreign State.',
        keywords: ['title', 'abolition', 'foreign', 'award', 'military', 'academic'],
    },
    // ── FREEDOM ──────────────────────────────────────────────
    {
        id: 'art19', num: '19', category: 'freedom', omitted: false,
        title: 'Protection of certain rights regarding freedom of speech, etc.',
        simple: 'All citizens have the right to: (1) freedom of speech and expression; (2) assemble peaceably and without arms; (3) form associations or unions or co-operative societies; (4) move freely throughout India; (5) reside and settle in any part of India; (6) practise any profession or carry on any occupation, trade or business. These freedoms are subject to reasonable restrictions permitted by the Constitution.',
        constitutional: 'All citizens shall have the right— (a) to freedom of speech and expression; (b) to assemble peaceably and without arms; (c) to form associations or unions or co-operative societies; (d) to move freely throughout the territory of India; (e) to reside and settle in any part of the territory of India; (g) to practise any profession, or to carry on any occupation, trade or business. These rights are subject to reasonable restrictions under specified clauses of the Constitution.',
        keywords: ['speech', 'expression', 'assembly', 'association', 'movement', 'reside', 'profession', 'trade', 'business', 'press', 'freedom'],
    },
    {
        id: 'art20', num: '20', category: 'freedom', omitted: false,
        title: 'Protection in respect of conviction for offences',
        simple: 'You cannot be convicted for an act that was not an offence under the law when you committed it. You cannot receive a greater penalty than what the law prescribed at the time of the offence. You cannot be tried twice for the same offence (Double Jeopardy). You cannot be forced to testify against yourself (Right against Self-Incrimination).',
        constitutional: 'No person shall be convicted of any offence except for violation of a law in force at the time of the commission of the act charged as an offence, nor be subjected to a penalty greater than that which might have been inflicted under the law in force at the time of the commission of the offence. No person shall be prosecuted and punished for the same offence more than once. No person accused of any offence shall be compelled to be a witness against himself.',
        keywords: ['double jeopardy', 'self-incrimination', 'conviction', 'offence', 'penalty', 'retrospective', 'ex post facto'],
    },
    {
        id: 'art21', num: '21', category: 'freedom', omitted: false,
        title: 'Protection of life and personal liberty',
        simple: 'No person shall be deprived of life or personal liberty except according to a procedure established by law. The Supreme Court has interpreted this Article broadly to include the right to a dignified life, right to health, right to a clean environment, right to privacy, and many other aspects of human dignity.',
        constitutional: 'No person shall be deprived of his life or personal liberty except according to procedure established by law.',
        keywords: ['life', 'liberty', 'personal liberty', 'dignity', 'privacy', 'procedure', 'deprivation'],
    },
    {
        id: 'art21A', num: '21A', category: 'freedom', omitted: false,
        title: 'Right to education',
        simple: 'The State shall provide free and compulsory education to all children between the ages of 6 and 14 years, in such manner as may be determined by law. This right is given constitutional status by the Constitution (Eighty-sixth Amendment) Act, 2002.',
        constitutional: 'The State shall provide free and compulsory education to all children of the age of six to fourteen years in such manner as the State may, by law, determine.',
        keywords: ['education', 'children', 'free', 'compulsory', '6 to 14', 'school', 'RTE'],
    },
    {
        id: 'art22', num: '22', category: 'freedom', omitted: false,
        title: 'Protection against arrest and detention in certain cases',
        simple: 'If you are arrested: (1) You must be told the reason for your arrest as soon as possible. (2) You have the right to consult and be defended by a lawyer of your choice. (3) You must be produced before the nearest magistrate within 24 hours (excluding travel time). (4) You generally cannot be held beyond that period without a magistrate\'s order. The Article also contains specific provisions and exceptions relating to enemy aliens and preventive detention.',
        constitutional: 'No person who is arrested shall be detained in custody without being informed, as soon as may be, of the grounds of such arrest nor shall he be denied the right to consult, and to be defended by, a legal practitioner of his choice. Every person who is arrested and detained in custody shall be produced before the nearest magistrate within a period of twenty-four hours of such arrest excluding the time necessary for the journey from the place of arrest to the court of the magistrate and no such person shall be detained in custody beyond the said period without the authority of a magistrate.',
        keywords: ['arrest', 'detention', 'magistrate', '24 hours', 'lawyer', 'legal practitioner', 'preventive detention', 'grounds of arrest'],
    },
    // ── EXPLOITATION ─────────────────────────────────────────
    {
        id: 'art23', num: '23', category: 'exploit', omitted: false,
        title: 'Prohibition of traffic in human beings and forced labour',
        simple: 'Traffic in human beings, begar (unpaid forced labour), and other similar forms of forced labour are prohibited and any contravention is punishable by law. However, the State may impose compulsory service for public purposes and, in doing so, shall not discriminate on grounds of religion, race, caste or class.',
        constitutional: 'Traffic in human beings and begar and other similar forms of forced labour are prohibited and any contravention of this provision shall be an offence punishable in accordance with law. Nothing in this article shall prevent the State from imposing compulsory service for public purposes, and in imposing such service the State shall not make any discrimination on grounds only of religion, race, caste or class or any of them.',
        keywords: ['traffic', 'human beings', 'forced labour', 'begar', 'bonded labour', 'exploitation'],
    },
    {
        id: 'art24', num: '24', category: 'exploit', omitted: false,
        title: 'Prohibition of employment of children in factories, etc.',
        simple: 'No child below the age of 14 years shall be employed to work in any factory or mine or in any other hazardous employment.',
        constitutional: 'No child below the age of fourteen years shall be employed to work in any factory or mine or engaged in any other hazardous employment.',
        keywords: ['child labour', 'children', '14 years', 'factory', 'mine', 'hazardous', 'employment'],
    },
    // ── RELIGION ─────────────────────────────────────────────
    {
        id: 'art25', num: '25', category: 'religion', omitted: false,
        title: 'Freedom of conscience and free profession, practice and propagation of religion',
        simple: 'All persons are equally entitled to freedom of conscience and the right to freely profess, practise and propagate religion, subject to public order, morality and health. The State may regulate or restrict the secular activities associated with religious practice and may make laws providing for social welfare and reform.',
        constitutional: 'Subject to public order, morality and health and to the other provisions of this Part, all persons are equally entitled to freedom of conscience and the right freely to profess, practise and propagate religion. Nothing in this article shall affect the operation of any existing law or prevent the State from making any law regulating or restricting any economic, financial, political or other secular activity which may be associated with religious practice.',
        keywords: ['religion', 'conscience', 'profess', 'practise', 'propagate', 'faith', 'belief', 'worship'],
    },
    {
        id: 'art26', num: '26', category: 'religion', omitted: false,
        title: 'Freedom to manage religious affairs',
        simple: 'Subject to public order, morality and health, every religious denomination or section thereof has the right to: (1) establish and maintain institutions for religious and charitable purposes; (2) manage its own affairs in matters of religion; (3) own and acquire movable and immovable property; (4) administer such property in accordance with law.',
        constitutional: 'Subject to public order, morality and health, every religious denomination or any section thereof shall have the right— (a) to establish and maintain institutions for religious and charitable purposes; (b) to manage its own affairs in matters of religion; (c) to own and acquire movable and immovable property; and (d) to administer such property in accordance with law.',
        keywords: ['religious denomination', 'church', 'mosque', 'temple', 'manage', 'religious institution', 'property'],
    },
    {
        id: 'art27', num: '27', category: 'religion', omitted: false,
        title: 'Freedom as to payment of taxes for promotion of any particular religion',
        simple: 'No person shall be compelled to pay any tax whose proceeds are specifically appropriated for the payment of expenses for the promotion or maintenance of any particular religion or religious denomination.',
        constitutional: 'No person shall be compelled to pay any taxes, the proceeds of which are specifically appropriated in payment of expenses for the promotion or maintenance of any particular religion or religious denomination.',
        keywords: ['tax', 'religion', 'compelled', 'promotion', 'religious denomination'],
    },
    {
        id: 'art28', num: '28', category: 'religion', omitted: false,
        title: 'Freedom as to attendance at religious instruction or worship in certain educational institutions',
        simple: 'No religious instruction shall be provided in any educational institution wholly maintained by State funds. Educational institutions administered by the State but established under any endowment or trust requiring religious instruction may provide such instruction. No person attending any State-recognised or State-aided educational institution shall be required to take part in any religious instruction or attend religious worship without their own consent (or guardian\'s consent if a minor).',
        constitutional: 'No religious instruction shall be provided in any educational institution wholly maintained out of State funds. Nothing in clause (1) shall apply to an educational institution which is administered by the State but has been established under any endowment or trust which requires that religious instruction shall be imparted in such institution. No person attending any educational institution recognised by the State or receiving aid out of State funds shall be required to take part in any religious instruction that may be imparted in such institution or to attend any religious worship that may be conducted in such institution or in any premises attached thereto unless such person or, if such person is a minor, his guardian has given his consent thereto.',
        keywords: ['religious instruction', 'school', 'college', 'worship', 'consent', 'state-funded', 'educational institution'],
    },
    // ── CULTURAL & EDUCATIONAL ────────────────────────────────
    {
        id: 'art29', num: '29', category: 'cultural', omitted: false,
        title: 'Protection of interests of minorities',
        simple: 'Any section of citizens having a distinct language, script or culture has the right to conserve it. No citizen shall be denied admission into any educational institution maintained by the State or receiving State aid on grounds only of religion, race, caste, language, or any of them.',
        constitutional: 'Any section of the citizens residing in the territory of India or any part thereof having a distinct language, script or culture of its own shall have the right to conserve the same. No citizen shall be denied admission into any educational institution maintained by the State or receiving aid out of State funds on grounds only of religion, race, caste, language or any of them.',
        keywords: ['minority', 'language', 'script', 'culture', 'admission', 'educational institution', 'conserve'],
    },
    {
        id: 'art30', num: '30', category: 'cultural', omitted: false,
        title: 'Right of minorities to establish and administer educational institutions',
        simple: 'All religious or linguistic minorities have the right to establish and administer educational institutions of their choice. The State shall not, when granting aid to educational institutions, discriminate against any educational institution on the ground that it is under the management of a minority. The Constitution also contains safeguards concerning the acquisition of property of minority educational institutions.',
        constitutional: 'All minorities, whether based on religion or language, shall have the right to establish and administer educational institutions of their choice. In making any law providing for the compulsory acquisition of any property of an educational institution established and administered by a minority, referred to in clause (1), the State shall ensure that the amount fixed by or determined under such law for the acquisition of such property is such as would not restrict or abrogate the right guaranteed under that clause. The State shall not, in granting aid to educational institutions, discriminate against any educational institution on the ground that it is under the management of a minority, whether based on religion or language.',
        keywords: ['minority', 'educational institution', 'establish', 'administer', 'religious minority', 'linguistic minority', 'school', 'college'],
    },
    // ── SAVING OF CERTAIN LAWS ────────────────────────────────
    {
        id: 'art31', num: '31', category: 'saving', omitted: true,
        title: 'Omitted',
        simple: 'Article 31 (Right to Property as a Fundamental Right) has been omitted from the Constitution by the Constitution (Forty-fourth Amendment) Act, 1978. The right to property is now a constitutional right under Article 300A, but not a Fundamental Right.',
        constitutional: '[Omitted by the Constitution (Forty-fourth Amendment) Act, 1978, s. 6 (w.e.f. 20-6-1979).]',
        keywords: ['omitted', 'property', 'article 31'],
    },
    {
        id: 'art31A', num: '31A', category: 'saving', omitted: false,
        title: 'Saving of laws providing for acquisition of estates, etc.',
        simple: 'Certain categories of laws — including those providing for the acquisition of estates, extinguishment or modification of rights in estates, and related matters — receive constitutional protection from challenge under Articles 14 and 19, subject to the conditions stated in the Article and constitutional amendments.',
        constitutional: 'Notwithstanding anything contained in article 13, no law providing for the acquisition by the State of any estate or of any rights therein or the extinguishment or modification of any such rights or for the taking over of the management of any property by the State for a limited period either in the public interest or in order to secure the proper management of the property, or for the amalgamation of two or more corporations either in the public interest or in order to secure the proper management of any of the corporations, or for the extinguishment or modification of any rights of managing agents, secretaries and treasurers, managing directors, directors or managers of corporations, or of any voting rights of shareholders thereof, or for the extinguishment or modification of any rights accruing by virtue of any agreement, lease or licence for the purpose of searching for, or winning, any mineral or mineral oil, or the premature termination or cancellation of any such agreement, lease or licence, shall be deemed to be void on the ground that it is inconsistent with, or takes away or abridges any of the rights conferred by article 14 or article 19.',
        keywords: ['estate', 'acquisition', 'property', 'saving', 'landlord', 'zamindari'],
    },
    {
        id: 'art31B', num: '31B', category: 'saving', omitted: false,
        title: 'Validation of certain Acts and Regulations',
        simple: 'Acts and Regulations included in the Ninth Schedule of the Constitution receive constitutional protection from challenge under Fundamental Rights provisions, subject to the Constitution and judicial interpretation by the Supreme Court.',
        constitutional: 'Without prejudice to the generality of the provisions contained in article 31A, none of the Acts and Regulations specified in the Ninth Schedule nor any of the provisions thereof shall be deemed to be void, or ever to have become void, on the ground that such Act, Regulation or provision is inconsistent with, or takes away or abridges any of the rights conferred by, any provisions of this Part, and notwithstanding any judgment, decree or order of any court or tribunal to the contrary, each of the said Acts and Regulations shall, subject to the power of any competent Legislature to repeal or amend it, continue in force.',
        keywords: ['ninth schedule', 'validation', 'acts', 'regulations', 'saving', 'void'],
    },
    {
        id: 'art31C', num: '31C', category: 'saving', omitted: false,
        title: 'Saving of laws giving effect to certain directive principles',
        simple: 'Laws enacted to give effect to certain Directive Principles of State Policy cannot be challenged on the ground that they are inconsistent with Articles 14 or 19, subject to the constitutional conditions laid down in the Article and judicial interpretation.',
        constitutional: 'Notwithstanding anything contained in article 13, no law giving effect to the policy of the State towards securing all or any of the principles laid down in Part IV shall be deemed to be void on the ground that it is inconsistent with, or takes away or abridges any of the rights conferred by article 14 or article 19 and no law containing a declaration that it is for giving effect to such policy shall be called in question in any court on the ground that it does not give effect to such policy.',
        keywords: ['directive principles', 'saving', 'DPSP', 'void', 'article 14', 'article 19'],
    },
    // ── CONSTITUTIONAL REMEDIES ───────────────────────────────
    {
        id: 'art32', num: '32', category: 'remedies', omitted: false,
        title: 'Remedies for enforcement of rights conferred by this Part',
        simple: 'Every person has the right to move the Supreme Court directly if their Fundamental Rights are violated. Dr. B.R. Ambedkar called this "the heart and soul of the Constitution." The Supreme Court has power to issue writs — including habeas corpus, mandamus, prohibition, quo warranto and certiorari — to enforce Fundamental Rights.',
        constitutional: 'The right to move the Supreme Court by appropriate proceedings for the enforcement of the rights conferred by this Part is guaranteed. The Supreme Court shall have power to issue directions or orders or writs, including writs in the nature of habeas corpus, mandamus, prohibition, quo warranto and certiorari, whichever may be appropriate, for the enforcement of any of the rights conferred by this Part.',
        keywords: ['supreme court', 'writ', 'habeas corpus', 'mandamus', 'remedy', 'enforcement', 'petition', 'certiorari', 'quo warranto'],
    },
    {
        id: 'art33', num: '33', category: 'remedies', omitted: false,
        title: 'Power of Parliament to modify the rights conferred by this Part in their application to Forces, etc.',
        simple: 'Parliament may, by law, modify the application of Fundamental Rights to members of the Armed Forces, police forces, intelligence organisations, and related communication systems to the extent necessary for proper discharge of their duties and maintenance of discipline.',
        constitutional: 'Parliament may, by law, determine to what extent any of the rights conferred by this Part shall, in their application to, the members of the Armed Forces or the Forces charged with the maintenance of public order, be restricted or abrogated so as to ensure the proper discharge of their duties and the maintenance of discipline among them.',
        keywords: ['armed forces', 'military', 'police', 'discipline', 'restriction', 'intelligence'],
    },
    {
        id: 'art34', num: '34', category: 'remedies', omitted: false,
        title: 'Restriction on rights conferred by this Part while martial law is in force in any area',
        simple: 'Parliament may indemnify persons in service of the Union or a State for acts done in connection with the maintenance or restoration of order in any area where martial law was in force. Parliament may also validate sentences passed or punishments inflicted under martial law.',
        constitutional: 'Notwithstanding anything in the foregoing provisions of this Part, Parliament may by law indemnify any person in the service of the Union or of a State or any other person in respect of any act done by him in connection with the maintenance or restoration of order in any area within the territory of India where martial law was in force or validate any sentence passed, punishment inflicted, forfeiture ordered, or other act done under martial law in such area.',
        keywords: ['martial law', 'restriction', 'order', 'indemnity', 'parliament', 'armed forces'],
    },
    {
        id: 'art35', num: '35', category: 'remedies', omitted: false,
        title: 'Legislation to give effect to the provisions of this Part',
        simple: 'Parliament (and not State Legislatures) has the exclusive power to make laws on certain matters specified in Part III, including laws prescribing punishment for offences under Articles 17 and 23, and laws required to give effect to Articles 32(3), 33 and 34.',
        constitutional: 'Notwithstanding anything in this Constitution, Parliament shall have, and the Legislature of a State shall not have, power to make laws with respect to any of the matters which under clause (3) of article 16, clause (3) of article 32, article 33 and article 34 may be provided for by law made by Parliament; and the power conferred on Parliament by this clause shall not be affected by the grant of power to Parliament to make laws under article 31A. Any law in force immediately before the commencement of this Constitution, in so far as it prescribes punishment for those acts which are declared to be offences under this Part, shall, subject to the terms thereof and to any adaptations and modifications that may be made therein under article 372, continue in force until altered or repealed or amended by Parliament.',
        keywords: ['parliament', 'legislation', 'exclusive power', 'state legislature', 'punishment', 'offence'],
    },
];

const CATEGORY_SECTIONS = [
    {
        id: 'general', label: 'General', articlesLabel: '12–13',
        icon: BookMarked, color: 'slate',
        desc: 'Defines the State and establishes the supremacy of Fundamental Rights over ordinary law.',
    },
    {
        id: 'equality', label: 'Right to Equality', articlesLabel: '14–18',
        icon: Scale, color: 'blue',
        desc: 'Guarantees equality before law and prohibits discrimination on specified grounds.',
    },
    {
        id: 'freedom', label: 'Right to Freedom', articlesLabel: '19–22 + 21A',
        icon: Shield, color: 'indigo',
        desc: 'Protects core civil liberties including speech, movement, profession, life, liberty and education.',
    },
    {
        id: 'exploit', label: 'Right against Exploitation', articlesLabel: '23–24',
        icon: Gavel, color: 'red',
        desc: 'Prohibits trafficking, forced labour, and employment of children in hazardous work.',
    },
    {
        id: 'religion', label: 'Right to Freedom of Religion', articlesLabel: '25–28',
        icon: Star, color: 'amber',
        desc: 'Guarantees freedom of conscience and the right to profess, practise and propagate religion.',
    },
    {
        id: 'cultural', label: 'Cultural and Educational Rights', articlesLabel: '29–30',
        icon: Globe, color: 'green',
        desc: 'Protects the language, script and culture of minorities and their right to education.',
    },
    {
        id: 'saving', label: 'Saving of Certain Laws', articlesLabel: '31A–31C',
        icon: Landmark, color: 'orange',
        desc: 'Provides constitutional protection to certain laws from challenge under Fundamental Rights.',
    },
    {
        id: 'remedies', label: 'Right to Constitutional Remedies', articlesLabel: '32–35',
        icon: Heart, color: 'purple',
        desc: 'Guarantees the right to approach the Supreme Court to enforce Fundamental Rights.',
    },
];

const QUICK_CARDS = [
    { icon: Scale, label: 'Equality', color: 'blue', text: 'Equal treatment for all before the law — no unjust discrimination.' },
    { icon: Shield, label: 'Freedom', color: 'indigo', text: 'Speech, movement, profession, life and liberty protected by law.' },
    { icon: Gavel, label: 'Against Exploitation', color: 'red', text: 'Ban on forced labour, trafficking and child labour.' },
    { icon: Star, label: 'Religious Freedom', color: 'amber', text: 'Right to follow and practise any religion freely.' },
    { icon: Globe, label: 'Cultural & Educational', color: 'green', text: 'Minorities can preserve their culture and run their own schools.' },
    { icon: Heart, label: 'Constitutional Remedies', color: 'purple', text: 'Approach the Supreme Court directly if your rights are violated.' },
];

const COLOR_MAP = {
    slate: { bg: 'bg-slate-50', border: 'border-slate-200', icon: 'bg-slate-100 text-slate-600', badge: 'bg-slate-100 text-slate-700', dot: 'bg-slate-400' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'bg-blue-100 text-blue-700', badge: 'bg-blue-100 text-blue-800', dot: 'bg-blue-500' },
    indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', icon: 'bg-indigo-100 text-indigo-700', badge: 'bg-indigo-100 text-indigo-800', dot: 'bg-indigo-500' },
    red: { bg: 'bg-red-50', border: 'border-red-200', icon: 'bg-red-100 text-red-700', badge: 'bg-red-100 text-red-800', dot: 'bg-red-500' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-200', icon: 'bg-amber-100 text-amber-700', badge: 'bg-amber-100 text-amber-800', dot: 'bg-amber-500' },
    green: { bg: 'bg-green-50', border: 'border-green-200', icon: 'bg-green-100 text-green-700', badge: 'bg-green-100 text-green-800', dot: 'bg-green-500' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-200', icon: 'bg-orange-100 text-orange-700', badge: 'bg-orange-100 text-orange-800', dot: 'bg-orange-500' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'bg-purple-100 text-purple-700', badge: 'bg-purple-100 text-purple-800', dot: 'bg-purple-500' },
};

const ALL_ARTICLE_NUMS = ['12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '21A', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '31A', '31B', '31C', '32', '33', '34', '35'];

// ─────────────────────────────────────────────
// ARTICLE ACCORDION
// ─────────────────────────────────────────────
const ArticleCard = ({ article, catColor, defaultOpen = false }) => {
    const [open, setOpen] = useState(defaultOpen);
    const [constOpen, setConstOpen] = useState(false);
    const colors = COLOR_MAP[catColor] || COLOR_MAP.blue;

    return (
        <div
            id={`article-${article.num}`}
            className={`rounded-2xl border ${colors.border} bg-white shadow-sm transition-all duration-200 hover:shadow-md ${article.omitted ? 'opacity-75' : ''}`}
        >
            <button
                onClick={() => setOpen(o => !o)}
                className="w-full text-left flex items-start gap-4 p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-2xl"
                aria-expanded={open}
                aria-controls={`article-body-${article.num}`}
            >
                <div className={`flex-shrink-0 flex items-center justify-center h-11 w-11 rounded-xl font-extrabold text-xs tracking-wide ${colors.icon}`}>
                    Art.{article.num}
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">Article {article.num}</span>
                        {article.omitted && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-red-50 border border-red-200 px-2 py-0.5 text-[10px] font-bold text-red-600 uppercase tracking-wide">
                                <AlertCircle className="h-3 w-3" /> Omitted
                            </span>
                        )}
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug pr-6">{article.title}</h4>
                </div>
                <span className="flex-shrink-0 text-slate-400 mt-0.5">
                    {open ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </span>
            </button>

            {open && (
                <div id={`article-body-${article.num}`} className="px-5 pb-5 space-y-4">
                    <div className={`rounded-xl ${colors.bg} border ${colors.border} p-4`}>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1.5">
                            <Info className="h-3.5 w-3.5" /> Simple Explanation
                        </p>
                        <p className="text-sm text-slate-700 leading-relaxed">{article.simple}</p>
                    </div>

                    <div>
                        <button
                            onClick={() => setConstOpen(o => !o)}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-900 transition-colors focus:outline-none focus-visible:underline"
                            aria-expanded={constOpen}
                        >
                            <BookOpen className="h-3.5 w-3.5" />
                            {constOpen ? 'Hide Constitutional Text' : 'Read Constitutional Text'}
                            {constOpen ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                        </button>
                        {constOpen && (
                            <div className="mt-2.5 rounded-xl bg-slate-50 border border-slate-200 p-4">
                                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">Constitutional Text (Simplified Reproduction)</p>
                                <p className="text-[13px] text-slate-600 leading-relaxed italic">{article.constitutional}</p>
                                <p className="text-[10px] text-slate-400 mt-3">Source: Constitution of India — edition updated as on 1 May 2026. The above is a reproduction for reference. Always consult the official Government of India text for legal purposes.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

// ─────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────
const PublicRights = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');
    const [activeArticleNum, setActiveArticleNum] = useState('12');
    const searchRef = useRef(null);
    const navRef = useRef(null);

    // ── Scroll to top when this page mounts ──
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    // ── Center Active Pill inside Horizontal Scroll Container (Without Window Scroll Hijacking) ──
    const centerNavPill = (num) => {
        const container = navRef.current;
        const pill = document.getElementById(`nav-pill-${num}`);
        if (container && pill) {
            const pillLeft = pill.offsetLeft;
            const pillWidth = pill.offsetWidth;
            const containerWidth = container.clientWidth;
            const targetLeft = pillLeft - (containerWidth / 2) + (pillWidth / 2);
            container.scrollTo({
                left: targetLeft,
                behavior: 'smooth'
            });
        }
    };

    // ── Scroll to Target Article & Auto-Center Pill ──
    const scrollNavTo = (num) => {
        setActiveArticleNum(num);

        const target =
            document.getElementById(`article-${num}`) ||
            document.getElementById(`article-${num.toLowerCase()}`) ||
            document.getElementById(`article-${num.toUpperCase()}`);

        if (target) {
            const offset = 120; // Offset for sticky navbar + jump bar
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }

        centerNavPill(num);
    };

    // ── Intersection Observer to update active article on scroll ──
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-10% 0px -40% 0px',
            threshold: 0,
        };

        const handleIntersect = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    if (id && id.startsWith('article-')) {
                        const rawNum = id.replace('article-', '');
                        const match = ALL_ARTICLE_NUMS.find(n => n.toLowerCase() === rawNum.toLowerCase());
                        if (match) {
                            setActiveArticleNum(match);
                        }
                    }
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        ALL_ARTICLE_NUMS.forEach(num => {
            const el =
                document.getElementById(`article-${num}`) ||
                document.getElementById(`article-${num.toLowerCase()}`) ||
                document.getElementById(`article-${num.toUpperCase()}`);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // ── Auto-scroll Jump Navigation to keep active pill centered ──
    useEffect(() => {
        if (activeArticleNum) {
            centerNavPill(activeArticleNum);
        }
    }, [activeArticleNum]);

    const filteredArticles = useMemo(() => {
        const q = searchQuery.toLowerCase().trim();
        return ARTICLES.filter(a => {
            const catMatch = activeFilter === 'all' || a.category === activeFilter;
            if (!catMatch) return false;
            if (!q) return true;
            return (
                a.num.toLowerCase().includes(q) ||
                a.title.toLowerCase().includes(q) ||
                a.simple.toLowerCase().includes(q) ||
                a.keywords.some(k => k.includes(q)) ||
                `article ${a.num}`.includes(q)
            );
        });
    }, [searchQuery, activeFilter]);

    // Group for display
    const groupedFiltered = useMemo(() => {
        return CATEGORY_SECTIONS
            .map(sec => ({
                ...sec,
                articles: filteredArticles.filter(a => a.category === sec.id),
            }))
            .filter(sec => sec.articles.length > 0);
    }, [filteredArticles]);

    const isFiltering = searchQuery.trim() !== '' || activeFilter !== 'all';

    return (
        <div className="min-h-screen bg-slate-50">

            {/* ── HERO HEADER ─────────────────────────────── */}
            <div className="bg-gradient-to-br from-[#0f1e45] via-[#1a3a6b] to-[#1e4080] text-white">
                <div className="mx-auto max-w-5xl px-5 py-14 sm:py-20">
                    <div className="flex flex-col items-center text-center gap-4">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-100 backdrop-blur-sm">
                            <Flame className="h-3.5 w-3.5 text-amber-400" /> Constitution of India • Part III
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                            Fundamental Rights
                        </h1>
                        <p className="text-base sm:text-lg text-blue-100 max-w-2xl leading-relaxed font-medium">
                            Guaranteed under <span className="text-white font-bold">Part III of the Constitution of India</span> (Articles 12–35). These rights protect every citizen's freedoms, equality, dignity and access to justice.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
                            {['Right to Equality', 'Right to Freedom', 'Right to Education', 'Right to Constitutional Remedies'].map(t => (
                                <span key={t} className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-blue-100 font-medium">{t}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Wave divider */}
                <div className="w-full overflow-hidden leading-none">
                    <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12">
                        <path d="M0 48 C360 0 1080 0 1440 48 L1440 48 L0 48 Z" fill="#f8fafc" />
                    </svg>
                </div>
            </div>

            <div className="mx-auto max-w-5xl px-4 sm:px-5 pb-32">

                {/* ── INTRO CARD ───────────────────────────── */}
                <div className="bg-white rounded-2xl border border-blue-100 shadow-sm p-5 flex items-start gap-4 mt-6 mb-8">
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 border border-blue-100">
                        <Info className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-slate-900 mb-1">What are Fundamental Rights?</p>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Fundamental Rights protect the essential freedoms, equality, dignity and legal protections of every person in India. They are guaranteed by the Constitution of India and cannot be taken away by ordinary legislation. If violated, you can approach the Supreme Court directly under <span className="font-semibold text-blue-700">Article 32</span>.
                        </p>
                    </div>
                </div>

                {/* ── QUICK UNDERSTANDING ──────────────────── */}
                <section aria-label="Quick understanding of Fundamental Rights" className="mb-10">
                    <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="inline-block h-1 w-5 rounded-full bg-amber-400"></span> Quick Understanding
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {QUICK_CARDS.map(({ icon: Icon, label, color, text }) => {
                            const c = COLOR_MAP[color];
                            return (
                                <div
                                    key={label}
                                    data-color={color}
                                    className={`quick-understanding-card rounded-2xl border ${c.border} ${c.bg} p-4 flex flex-col gap-2`}
                                >
                                    <div className="quick-understanding-card__shine" />
                                    <div className={`quick-understanding-card__icon flex h-9 w-9 items-center justify-center rounded-xl ${c.icon}`}>
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <p className="quick-understanding-card__title text-xs font-bold text-slate-900">{label}</p>
                                    <p className="quick-understanding-card__description text-xs text-slate-600 leading-relaxed">{text}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* ── CATEGORY OVERVIEW CARDS ──────────────── */}
                <section aria-label="Fundamental Rights categories" className="mb-10">
                    <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="inline-block h-1 w-5 rounded-full bg-blue-500"></span> Rights Categories
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {CATEGORY_SECTIONS.map(({ id, label, articlesLabel, icon: Icon, color, desc }) => {
                            const c = COLOR_MAP[color];
                            return (
                                <button
                                    key={id}
                                    onClick={() => { setActiveFilter(id); setSearchQuery(''); window.scrollTo({ top: 600, behavior: 'smooth' }); }}
                                    className={`text-left rounded-2xl border ${c.border} ${c.bg} p-4 flex items-start gap-3 hover:shadow-md transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`}
                                    aria-label={`Filter by ${label}`}
                                >
                                    <div className={`flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-xl ${c.icon} transition-transform duration-200 group-hover:scale-110`}>
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between gap-2">
                                            <p className="text-xs font-bold text-slate-900 leading-snug">{label}</p>
                                            <span className={`flex-shrink-0 text-[10px] font-semibold rounded-full px-2 py-0.5 ${c.badge}`}>Art. {articlesLabel}</span>
                                        </div>
                                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{desc}</p>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </section>

                {/* ── ARTICLE NAVIGATION BAR ───────────────── */}
                <section aria-label="Article navigation" className="public-rights-jump-article mb-6 sticky top-2 z-30 bg-slate-50/95 backdrop-blur-md py-3 transition-all">
                    <h2 className="public-rights-jump-article__title">Jump to Article</h2>
                    <nav aria-label="Jump to article list">
                        <div ref={navRef} className="public-rights-jump-article__scroll">
                            <div className="public-rights-jump-article__list">
                                {ALL_ARTICLE_NUMS.map(num => {
                                    const art = ARTICLES.find(a => a.num === num);
                                    const isActive = activeArticleNum === num;
                                    return (
                                        <button
                                            key={num}
                                            id={`nav-pill-${num}`}
                                            onClick={() => scrollNavTo(num)}
                                            aria-current={isActive ? 'true' : undefined}
                                            className={`public-rights-jump-article__item ${isActive
                                                ? 'public-rights-jump-article__item--active'
                                                : art?.omitted
                                                    ? 'public-rights-jump-article__item--omitted'
                                                    : ''
                                                }`}
                                            title={art ? art.title : `Article ${num}`}
                                            aria-label={`Go to Article ${num}${art?.omitted ? ' (Omitted)' : ''}`}
                                        >
                                            {num}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </nav>
                </section>

                {/* ── SEARCH + FILTER ──────────────────────── */}
                <section aria-label="Search and filter Fundamental Rights" className="mb-8 bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5 space-y-4">
                    {/* Search bar */}
                    <div className="relative">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                        <input
                            ref={searchRef}
                            type="text"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            placeholder='Search by article number, right, or keyword — e.g. "Article 21", "Education", "Arrest"'
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-10 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                            aria-label="Search Fundamental Rights"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => { setSearchQuery(''); searchRef.current?.focus(); }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors focus:outline-none"
                                aria-label="Clear search"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        )}
                    </div>

                    {/* Filter pills */}
                    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by rights category">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveFilter(cat.id)}
                                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold border transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${activeFilter === cat.id
                                    ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300'
                                    }`}
                                aria-pressed={activeFilter === cat.id}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Result count */}
                    {isFiltering && (
                        <p className="text-xs text-slate-500">
                            Showing <span className="font-semibold text-slate-900">{filteredArticles.length}</span> of {ARTICLES.length} articles
                            {searchQuery && <> matching "<span className="text-blue-600 font-medium">{searchQuery}</span>"</>}
                        </p>
                    )}
                </section>

                {/* ── ARTICLES CONTENT ─────────────────────── */}
                {groupedFiltered.length === 0 ? (
                    <div className="text-center py-20 text-slate-400">
                        <Search className="h-10 w-10 mx-auto mb-3 opacity-40" />
                        <p className="font-semibold text-slate-600">No articles found</p>
                        <p className="text-sm mt-1">Try a different search term or filter.</p>
                        <button onClick={() => { setSearchQuery(''); setActiveFilter('all'); }} className="mt-4 text-sm font-semibold text-blue-600 hover:underline">Clear filters</button>
                    </div>
                ) : (
                    <div className="space-y-10">
                        {groupedFiltered.map(sec => {
                            const c = COLOR_MAP[sec.color];
                            const Icon = sec.icon;
                            return (
                                <section key={sec.id} aria-labelledby={`section-${sec.id}`}>
                                    {/* Section header */}
                                    <div className={`flex items-center gap-3 mb-4 p-4 rounded-2xl border ${c.border} ${c.bg}`}>
                                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${c.icon} flex-shrink-0`}>
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h2 id={`section-${sec.id}`} className="text-base font-extrabold text-slate-900 leading-tight">{sec.label}</h2>
                                            <p className="text-xs text-slate-500 mt-0.5">{sec.desc}</p>
                                        </div>
                                        <span className={`flex-shrink-0 text-xs font-bold rounded-full px-3 py-1 border ${c.badge} ${c.border}`}>
                                            Art. {sec.articlesLabel}
                                        </span>
                                    </div>

                                    {/* Article cards */}
                                    <div className="space-y-3 pl-0 sm:pl-2">
                                        {sec.articles.map(art => (
                                            <ArticleCard key={art.id} article={art} catColor={sec.color} />
                                        ))}
                                    </div>
                                </section>
                            );
                        })}
                    </div>
                )}

                {/* ── KNOW YOUR RIGHTS CTA ─────────────────── */}
                <div className="mt-14 rounded-3xl bg-gradient-to-br from-[#0f1e45] via-[#1a3a6b] to-[#1e4080] text-white p-8 sm:p-10 text-center relative overflow-hidden">
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-5">
                        <Scale className="h-64 w-64" />
                    </div>
                    <div className="relative">
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300 uppercase tracking-widest mb-4">
                            <Star className="h-3 w-3" /> Know Your Rights
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-snug">
                            Understand your constitutional rights.
                        </h2>
                        <p className="text-blue-100 text-base max-w-xl mx-auto leading-relaxed mb-6">
                            Stay informed. Stay empowered. Your rights are your shield — guaranteed by the Constitution of India.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <a
                                href="https://legislative.gov.in/constitution-of-india/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl bg-white text-blue-900 font-bold px-6 py-3 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                            >
                                Read Full Constitution <ArrowRight className="h-4 w-4" />
                            </a>
                            <button
                                onClick={() => { setSearchQuery(''); setActiveFilter('all'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 text-white font-semibold px-6 py-3 text-sm hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
                            >
                                Explore All Rights
                            </button>
                        </div>
                    </div>
                </div>

                {/* ── SOURCE NOTE ──────────────────────────── */}
                <div className="mt-8 rounded-xl border border-slate-200 bg-white p-4 flex items-start gap-3">
                    <BookOpen className="h-4 w-4 text-slate-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-500 leading-relaxed">
                        <span className="font-semibold text-slate-700">Source: </span>
                        The Constitution of India, Government of India, Legislative Department — edition updated as on <span className="font-semibold">1 May 2026</span>.
                        The simplified explanations on this page are for citizen awareness and do not constitute legal advice. Always refer to the official constitutional text for legal purposes. Visit{' '}
                        <a href="https://legislative.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">legislative.gov.in</a> for the authoritative text.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default PublicRights;
