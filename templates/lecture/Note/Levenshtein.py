# coding: utf-8
"""
ex) How to execute?
python Levenshtein.py spamandegg gpanandegs
>>> 3
"""
import numpy as np
import sys

def getAlphabet(sequences):
    """
    Assign numbers to bases.
    (['A', 'T', 'T'], ['C', 'G']) -> {'A':0, 'T':1, 'C':2, 'G':3}
    """
    alphabet = {}
    i = 0
    for sequence in sequences:
        for base in sequence:
            if base not in alphabet:
                alphabet[base] = i
                i = i + 1
    return alphabet

def Damerau_Levenshtein_distance(a, b):
    """
    a = Source sequence
    b = Comparing sequence
    """
    alphabet = getAlphabet((a,b))
    inf = len(a) + len(b) + 1
    D   = np.zeros((len(a)+2,len(b)+2), dtype=int)

    #=== Initialization ===
    D[0][0] = inf
    for i in range(1, len(a)+2):
        D[i][1] = i-1
        D[i][0] = inf
    for j in range(1, len(b)+2):
        D[1][j] = j-1
        D[0][j] = inf

    #=== Memorize indexes of replacement candidate===
    LastMatchPosA = [0 for i in range(len(alphabet))]

    #=== Dynamic programming ===
    for i in range(len(a)):
        LastMatchPosB = 0
        for j in range(len(b)):
            k = LastMatchPosA[alphabet[b[j]]]
            l = LastMatchPosB
            cost = 1
            if (a[i] == b[j]):
                cost = 0
                LastMatchPosB = j+1
            D[i+2][j+2] = min(
                D[i+1][j+1]+cost,     # Replace
                D[i+2][j+1]+1,        # Delete
                D[i+1][j+2]+1,        # Insert
                D[k][l]+(i-k)+1+(j-l) # Transpose
            )
        LastMatchPosA[alphabet[a[i]]] = i+1

    return D[-1][-1]

if __name__ == "__main__":
    #=== Error handling ====
    try:
        str1 = sys.argv[1]
    except IndexError as e:
        print("Please enter sequences after `python {}`".format(sys.argv[0]))
        sys.exit()
    try:
        str2 = sys.argv[2]
    except IndexError as e:
        print("Please enter two sequences.")
        sys.exit()

    #=== Main Program ===
    print("Your input was {} and {}.".format(str1, str2))
    print("Damerau-Levenshtein distance: {}".format(Damerau_Levenshtein_distance(str1, str2)))
