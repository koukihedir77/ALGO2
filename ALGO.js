ALGORITHN Somme Commune
var 
T: ARRAY_OF INTEGER[] := [2,10,3,6,5] 
D: ARRAY_OF INTEGER[] :=[5,3,4,1]
sum : INTERGER :=0;
BEGIN 
FOR i FROM 1 TO T.length STEP 1 DO 
FOR j FROM 1 TO D.length STEP 1 DO 
IF (T[i]=D[j]) THEN 
sum := sum + T[i]*2
END _IF
END_FOR

END_FOR
END





ALGORITHN SommeCHash
var 
T : ARRAY_OF INTEGER[]:=[2,10,3,6,5];
D : ARRAY_OF INTEGER[]:=[5,3,4,1];
sum : INTEGER := 0;
H : HASH_TABLE<INTEGER,INTEGER>
BEGIN
FOR i FROM 1 TO T.length STEP 1 DO 
H.insert(T[i],1)
END_FOR

FOR i FROM 1 TO D.length STEP 1 DO 
IF (H.lookup(D[i])= TRUE)THEN
H.insert(D[i],2)
else
H.insert(D[i],1)
END_IF
END_FOR
FOR i FROM 1 TO T.length STEP 1DO
IF (H.get(T[i])=2)THEN
sum := sum + T [i]*2
END_IF
END_FOR

END




ALGORITHN DistinctSimple
Var


set1 : ARRAY_OF INTEGER[4]:=[3,17,9];
set2 : ARRAY_OF INTEGER[5]:=[2,4,1,9,3]
i,j,sum : INTEGER:= 0
bool:Boolean
BEGIN
FOR i FROM 1 TO set1.length STEP 1 DO 
bool := false
FOR j FROM 1 TO set2.length STEP 1 DO 
IF ( set1[i]=set2[j]) THEN
bool = true 
break
END_IF
END_FOR
IF (bool=false)THEN
sum:=sum +set1[i]
END_IF
END_FOR
FOR i FROM 1 TO set2.length STEP 1 DO
bool := false
FOR j FROM 1 TO set1.length STEP 1 DO 
IF (set2[i]=set1[j])THEN
bool := true 
break
END_IF
END_FOR
write (sum)
END
