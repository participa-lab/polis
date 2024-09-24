// Copyright (C) 2012-present, The Authors. This program is free software: you can redistribute it and/or  modify it under the terms of the GNU Affero General Public License, version 3, as published by the Free Software Foundation. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details. You should have received a copy of the GNU Affero General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.

var s = {};

s.agree = "Acordar";
s.disagree = "Discrepar";
s.pass = "Pasar / Indeciso";

s.modSpam = "Spam";
s.modOffTopic = "Fuera de Contexto";
s.modImportant = "Importante";
s.modSubmitInitialState = "Saltártelo (ninguna de las anteriores), próximo comentario";  //This could sound/be wrong in context
s.modSubmit = "Terminado, próximo comentario";   //Ditto above

s.x_wrote = "escribió:";
s.x_tweeted = "tuiteó:";
s.comments_remaining = "{{num_comments}} restante";
s.comments_remaining2 = "{{num_comments}} comentarios restantes";
s.group_123 = "Grupo:";
s.comment_123 = "Comentario:";
s.majorityOpinion = "Opinión de la Mayoría";
s.majorityOpinionShort = "Mayoría";
s.info = "Info";
s.addPolisToYourSite = "<img style='height: 20px; margin: 0px 4px;' src='{{URL}}'/>";
s.privacy = "Privacidad";
s.TOS = "Condiciones de Servicio";
s.writePrompt = "Compartí tu perspectiva con una opinión...";
s.anonPerson = "Anónimo";
s.helpWhatAmISeeingTitle = "¿Qué es lo que veo?";
s.helpWhatAmISeeing = "Se agrupa la gente que vota de manera similar. Haz clic en un grupo para ver sus puntos de vista compartidos.";
s.helpWhatDoIDoTitle = " ¿Qué hago?";
s.helpWhatDoIDo = "Haz clic en 'Acordar' o 'Discrepar' para votar en comentarios ajenos. Escribe un comentario (manténgalo a una sola idea). Invita a tus amigos a la discusión!";
s.writeCommentHelpText = "Si tu perspectiva no está representada, <strong>escribí</strong> tu propia opinión";
s.helpWriteListIntro = "Una opinión aporta valor si es:";
s.helpWriteListStandalone = "Una única idea";
s.helpWriteListRaisNew = "Nueva perspectiva, experiencia o problema";
s.helpWriteListShort = "Claro y conciso (límite - 140 carácteres)";
s.heresHowGroupVoted = "Aquí está como votó el Grupo {{GROUP_NUMBER}}:";
s.one_person = "{{x}} persona";
s.x_people = "{{x}} personas";
s.acrossAllPtpts = "Por todos los participantes:";  //this may sound weird depending on the use context...?
s.xPtptsSawThisComment = " vio este comentario";
s.xOfThoseAgreed = "de esos participantes acordaron";
s.xOfthoseDisagreed = "de esos participantes discreparon";
s.opinionGroups = "Grupos de Opinión";

s.pctAgreed = "{{pct}}% Acordaron";
s.pctDisagreed = "{{pct}}% Discreparon";
s.pctAgreedLong = "{{pct}}% de groupo que acordaron con la opinión {{comment_id}}.";
s.pctAgreedOfGroup = "{{pct}}% de Grupo {{group}} Acordaron";
s.pctDisagreedOfGroup = "{{pct}}% de Grupo {{group}} Discreparon";
s.pctDisagreedLong = "{{pct}}% de todos que votaron {{comment_id}} discreparon.";
s.pctAgreedOfGroupLong = "{{pct}}% de los del group {{group}} que votaron la opinión {{comment_id}} acordaron.";
s.pctDisagreedOfGroupLong = "{{pct}}% de los en el {{group}} que votaron la opinión {{comment_id}} discreparon.";
s.commentSent = "Opinión Enviada! Otros participantes verán tu opinión y acordarán or discreparán.";
s.commentSendFailed = "Hubo un error procesando su opinión.";
s.commentSendFailedEmpty = "Hubo un error procesando su opinión - Opinión incompleta.";
s.commentSendFailedTooLong = "Hubo un error procesando su opinión - Opinión demasiado larga.";
s.commentSendFailedDuplicate = "Hubo un error procesando su opinión. Esta opinión ya existe.";
s.commentErrorDuplicate = "!Duplicado! Esta opinión ya existe.";
s.commentErrorConversationClosed = "Esta conversación está cerrada. No puede recibir más opiniones.";
s.commentIsEmpty = "Opinión incompleta";
s.commentIsTooLong = "Opinión demasiado larga";
s.hereIsNextStatement = "Voto procesado. Navigue arriba para ver el comentario próximo.";
s.connectFacebook = "Conecta a Facebook";
s.connectTwitter = "Conecta a Twitter";
s.connectToPostPrompt = "Conecta a una identidad para comentar. No publicaremos tu línea de tiempo.";
s.connectToVotePrompt = "Conecta a una identidad para votar. No publicaremos tu línea de tiempo.";
s.tip = "Consejo:";
s.commentWritingTipsHintsHeader = "Cómo escribir un comentario";
s.tipCharLimit = "Opiniones limitadas a {{char_limit}} carácteres.";
s.tipCommentsRandom = "Las opiniones se exponen aleatoriamente. No puedes responder directamente a una persona.";
s.tipOneIdea = "Desagrega los comentarios largos que contienen varias ideas. Así será más fácil que los demás voten en su comentario.";
s.tipNoQuestions = "Las opiniones deben ser declaraciones en vez de preguntas. Los participantes acordarán o discreparán con lo que declares.";
s.commentTooLongByChars = "Excedió el límite de carácters por {{CHARACTERS_COUNT}} carácters.";
s.notSentSinceDemo = "(en realidad no, este es un demo)";
s.submitComment = "Enviar";
s.tipStarred = "Marcado como importante.";
s.participantHelpWelcomeText = "Discutamos de manera diferente - <span style='font-weight: 700;'>votá</span> en las opiniones de los demás y <span style='font-weight: 700;'>contribuí</span> con opiniones propias.";
s.participantHelpGroupsText = "<span style='font-weight: 700;'>Se agrupa</span> toda la gente que vota de manera similar. Haz clic en un grupo para ver los puntos de vista que comparten sus miembros <a style='font-weight: 700; cursor: pointer; text-decoration: underline' id='helpTextGroupsExpand'>...más</a>";
s.participantHelpGroupsNotYetText = "La visualización aparecerá cuando 7 participantes votan";
s.helpWhatAreGroupsDetail = "<p>Probablemente has visto los 'productos recomendados' en Amazon, o las 'películas recomendadas' en Netflix. Esos servicios usan la estadística para agruparte con la demás gente que compra y mira cosas similares y entonces mostrarte cosas compradas o miradas por ellos.</p> <p> Cuando votas en un comentario de Pol.is, ¡serás agrupado con gente que ha votado de manera similar! Aquí abajo puedes explorar los grupos. Cada grupo se compone de gente con opiniones similares. Cada conversación tiene percepciones nuevas y fascinantes para descubrir. ¡Dale! - ¡haz clic en un grupo para ver cuáles opiniones lo unen y cuáles lo hace único! </p>";
s.socialConnectPrompt = "Conéctate para ver tus amigos y la gente que sigues en la visualización.";
s.connectFbButton = "Conecta con Facebook";
s.connectTwButton = "Conecta con Twitter";
s.polis_err_reg_fb_verification_email_sent = "Por favor, chequea tu email para el enlace de verificación, y entonces regresa aquí para continuar.";
s.polis_err_reg_fb_verification_noemail_unverified = "Tu cuenta de Facebook no está verificada. Por favor, verifica tu email con Facebook, y entonces regresa aquí para continuar.";
s.showTranslationButton = "Active Traducción";
s.hideTranslationButton = "Deactive el servicio traducción";
s.thirdPartyTranslationDisclaimer = "Traducción proporcionada por un tercero";
s.notificationsAlreadySubscribed = "Está suscrito para recibir actualizaciones a esta conversación.";
s.notificationsGetNotified = "Recibe notificaciones cuando opiniones nuevos aparecen:";
s.notificationsEnterEmail = "Ingrese su dirección de email para recibir notificaciones cuando lleguen más opiniones:";
s.labelEmail = "Email";
s.notificationsSubscribeButton = "Subscribe";
s.notificationsSubscribeErrorAlert = "Error al suscribirse";
s.noCommentsYet = "Aún no hay opiniones";
s.noCommentsYetSoWrite = "Agregue un comentario para comenzar esta conversación.";
s.noCommentsYetSoInvite = "Comience esta conversación - invite más participantes o agregue un comentario.";
s.noCommentsYouVotedOnAll = "Ya votó para todos los opiniones.";
s.noCommentsTryWritingOne = "Si tiene algo más para decir, escriba un comentario nuevo.";
s.convIsClosed = "Esta conversación está cerrada";
s.noMoreVotingAllowed = "No puede votar más.";
s.topic_good_01 = "Qué deberíamos hacer con el cuarto de ping pong?";
s.topic_good_01_reason = "respuesta libre; cualquier persona puede expresar una opinión a esta pregunta";
s.topic_good_02 = "Qué le parece la propuesta nueva?";
s.topic_good_02_reason = "respuesta libre; cualquier persona puede expresar una opinión a esta pregunta";
s.topic_good_03 = "Hay algo que está limitando productividad?";
s.topic_bad_01 = "everyone report your launch readiness";
s.topic_bad_01_reason = "personas de varios equipos van a votar por las repuestas, pero tal vez no tengan el sabimiento de votar confidentamente.";
s.topic_bad_02 = "what are our launch blockers?";
s.topic_bad_02_reason = "";

module.exports = s;
