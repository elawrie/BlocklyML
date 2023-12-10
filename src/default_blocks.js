var xmlString = `
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="train_model" id=")mF}-;B6$kg=JF~2+ZeZ" x="26" y="10">
    <value name="MODEL">
      <block type="choose_classification_model" id="T2Vy-#{i=3X%-XQ@[e4D">
        <field name="CLASSIFICATION_MODEL">KNeighborsClassifier</field>
      </block>
    </value>
    <value name="TRAIN_DATA">
      <block type="train_test_split" id="Z]l2y_gDO0#30eub~E{3">
        <field name="TRAIN_RATIO">0.2</field>
        <value name="train_data">
          <block type="attribute_selection" id="R#ra~QgO@6^8F]Y7K?z]">
            <field name="SELECTED_ATTRIBUTES">bill_depth_mm, bill_depth_mm</field>
            <value name="DATA">
              <block type="drop_nulls" id="drop_nulls">
                <value name="DATA">
                  <block type="normalize_data" id="normalize_data">
                    <value name="DATA">
                      <block type="read_csv" id="read_csv">
                        <value name="csv_file">
                          <block type="Penguins Dataset" id="a2f[:[$y7#g_ZDIhY]Lp"></block>
                        </value>
                      </block>
                    </value>
                  </block>
                </value>
              </block>
            </value>
          </block>
        </value>
        <value name="target">
          <block type="target_var" id="WW#V2,f%qKZZ=]8[}?7%">
            <field name="column_name">species</field>
          </block>
        </value>
      </block>
    </value>
    <next>
      <block type="evaluate_classification_model" id="CXH.ErvUb}RW$hG#G|Px">
        <field name="METRIC">confusion_matrix</field>
        <value name="PREDICTION">
          <block type="predict_model" id="QkA,)9r_zQ8_t*Jkc)e8"></block>
        </value>
      </block>
    </next>
  </block>
</xml>
`;
var parser = new DOMParser();
var xmlDoc = parser.parseFromString(xmlString, "text/xml");
var serializer = new XMLSerializer();
window.defaultBlocks = serializer.serializeToString(xmlDoc);