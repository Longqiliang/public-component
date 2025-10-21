<template>
  <zx-mindmap-v2 style="height:calc( 100vh - 100px );" v-model="mindmapData" :name="mindmapName" :props="props"
    :readonly="true" :popover="true" :fit="true">
  </zx-mindmap-v2>
</template>
<script setup>
import { ref, reactive } from 'vue';


const mindmapData = ref({
  "id": "0",
  "name": "南山区",
  "formatname": "南山区",
  "orgid": "0",
  "orgname": "南山区",
  "type": "dept  ",
  "child": [
    {
      "sortno": 3,
      "orgname": "区人大常委会办公室",
      "level": 1,
      "name": "区人大常委会办公室",
      "bzdesc": "1正4副",
      "formatname": "区人大常委会办公室(1正4副)",
      "id": "O0000032",
      "type": "dept",
      "orgid": "O0000032",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**514,1971-10,天津,2022-01任现级",
          "id": "2645026c5c71468ea8ea9e2ef49a97f2_0",
          "person_id": "53",
          "jgid": "O0000032",
          "job_name": "主任",
          "name": "**514,1971-10,天津,2022-01任现级"
        },
        {
          "type": "user",
          "formatname": "**025,1982-01,广西南宁,2023-01任现级",
          "id": "ce344f383fe94f2393aa47a59a6ba5b3_0",
          "person_id": "4289",
          "jgid": "O0000032",
          "job_name": "副主任",
          "name": "**025,1982-01,广西南宁,2023-01任现级"
        },
        {
          "type": "user",
          "formatname": "【空缺】测试的",
          "id": "ce344f383fe94f2393aa47a59a6ba5b3_1",
          "person_id": null,
          "jgid": "O0000032",
          "job_name": "测试的",
          "name": "【空缺】测试的"
        },
        {
          "type": "user",
          "formatname": "【空缺】测试的",
          "id": "ce344f383fe94f2393aa47a59a6ba5b3_2",
          "person_id": null,
          "jgid": "O0000032",
          "job_name": "测试的",
          "name": "【空缺】测试的"
        },
        {
          "type": "user",
          "formatname": "【空缺】测试2",
          "id": "66e97fa24b004e81a0e78b5db8291040_0",
          "person_id": null,
          "jgid": "O0000032",
          "job_name": "测试2",
          "name": "【空缺】测试2"
        },
        {
          "type": "user",
          "formatname": "【空缺】测试2",
          "id": "66e97fa24b004e81a0e78b5db8291040_1",
          "person_id": null,
          "jgid": "O0000032",
          "job_name": "测试2",
          "name": "【空缺】测试2"
        },
        {
          "type": "user",
          "formatname": "【空缺】测试2",
          "id": "66e97fa24b004e81a0e78b5db8291040_2",
          "person_id": null,
          "jgid": "O0000032",
          "job_name": "测试2",
          "name": "【空缺】测试2"
        },
        {
          "type": "user",
          "formatname": "**090,1977-04,广东惠州,2018-09任现级",
          "id": "2e8e4fb7d70643309fd6c7ff690bbd00_0",
          "person_id": "3478",
          "jgid": "O0000032",
          "job_name": "测试1、副主任",
          "name": "**090,1977-04,广东惠州,2018-09任现级"
        },
        {
          "type": "user",
          "formatname": "**234,1963-06,广东兴宁,2012-03/2021-06任现级",
          "id": "2061_dyy_二级调研员",
          "person_id": "2061",
          "jgid": "O0000032",
          "job_name": "二级调研员",
          "name": "**234,1963-06,广东兴宁,2012-03/2021-06任现级"
        },
        {
          "type": "user",
          "formatname": "**619,1971-11,广东紫金,2019-01/2019-06任现级",
          "id": "O0000032_dyy2_1",
          "person_id": "3489",
          "jgid": "O0000032",
          "job_name": "四级调研员",
          "name": "**619,1971-11,广东紫金,2019-01/2019-06任现级"
        }
      ]
    },
    {
      "sortno": 4,
      "orgname": "区政协办公室",
      "level": 1,
      "name": "区政协办公室",
      "bzdesc": "2正1副",
      "formatname": "区政协办公室(2正1副)",
      "id": "O0000039",
      "type": "dept",
      "orgid": "O0000039",
      "parentid": "0",
      "child": []
    },
    {
      "sortno": 5,
      "orgname": "区纪委监委机关",
      "level": 1,
      "name": "区纪委监委机关",
      "bzdesc": "3+3正12+3副",
      "formatname": "区纪委监委机关(3+3正12+3副)",
      "id": "O0000052",
      "type": "dept",
      "orgid": "O0000052",
      "parentid": "0",
      "child": [
        {
          "sortno": 1,
          "orgname": null,
          "level": 2,
          "name": "班子",
          "bzdesc": "",
          "formatname": "班子",
          "id": "O0000052_banzi",
          "type": "dept",
          "orgid": null,
          "parentid": "O0000052",
          "child": [
            {
              "type": "user",
              "formatname": "**114,1975-10,河北青龙,2021-09任现级",
              "id": "832a1841e1cb4e738fa2792cf521779e_0",
              "person_id": "3526850681138240",
              "jgid": "O0000052_banzi",
              "job_name": "纪委副书记",
              "name": "**114,1975-10,河北青龙,2021-09任现级"
            },
            {
              "type": "user",
              "formatname": "【空缺】纪委副书记",
              "id": "832a1841e1cb4e738fa2792cf521779e_1",
              "person_id": null,
              "jgid": "O0000052_banzi",
              "job_name": "纪委副书记",
              "name": "【空缺】纪委副书记"
            },
            {
              "type": "user",
              "formatname": "**61X,1973-04,山东菏泽,2019-01任现级",
              "id": "d126a8e5c9b2485f83b161b8dc3e9074_0",
              "person_id": "737",
              "jgid": "O0000052_banzi",
              "job_name": "主任",
              "name": "**61X,1973-04,山东菏泽,2019-01任现级"
            },
            {
              "type": "user",
              "formatname": "**531,1980-01,香港,2018-09任现级",
              "id": "1c624ab4e0804abdaa08956b1f564c76_0",
              "person_id": "2590",
              "jgid": "O0000052_banzi",
              "job_name": "纪委常委、委员",
              "name": "**531,1980-01,香港,2018-09任现级"
            },
            {
              "type": "user",
              "formatname": "【空缺】纪委常委",
              "id": "1c624ab4e0804abdaa08956b1f564c76_1",
              "person_id": null,
              "jgid": "O0000052_banzi",
              "job_name": "纪委常委",
              "name": "【空缺】纪委常委"
            },
            {
              "type": "user",
              "formatname": "【空缺】纪委常委",
              "id": "1c624ab4e0804abdaa08956b1f564c76_2",
              "person_id": null,
              "jgid": "O0000052_banzi",
              "job_name": "纪委常委",
              "name": "【空缺】纪委常委"
            },
            {
              "type": "user",
              "formatname": "【空缺】专职监察委员",
              "id": "8925671b17604c0ab2fa705de7329c1a_0",
              "person_id": null,
              "jgid": "O0000052_banzi",
              "job_name": "专职监察委员",
              "name": "【空缺】专职监察委员"
            },
            {
              "type": "user",
              "formatname": "【空缺】专职监察委员",
              "id": "8925671b17604c0ab2fa705de7329c1a_1",
              "person_id": null,
              "jgid": "O0000052_banzi",
              "job_name": "专职监察委员",
              "name": "【空缺】专职监察委员"
            },
            {
              "type": "user",
              "formatname": "【空缺】测试",
              "id": "0177c56bdee04752ae014cece1483a70_0",
              "person_id": null,
              "jgid": "O0000052_banzi",
              "job_name": "测试",
              "name": "【空缺】测试"
            },
            {
              "type": "user",
              "formatname": "【空缺】测试",
              "id": "0177c56bdee04752ae014cece1483a70_1",
              "person_id": null,
              "jgid": "O0000052_banzi",
              "job_name": "测试",
              "name": "【空缺】测试"
            },
            {
              "type": "user",
              "formatname": "【空缺】测试2",
              "id": "31ae0c2df309431a80ac83eb5c3c67ca_0",
              "person_id": null,
              "jgid": "O0000052_banzi",
              "job_name": "测试2",
              "name": "【空缺】测试2"
            },
            {
              "type": "user",
              "formatname": "【空缺】测试2",
              "id": "31ae0c2df309431a80ac83eb5c3c67ca_1",
              "person_id": null,
              "jgid": "O0000052_banzi",
              "job_name": "测试2",
              "name": "【空缺】测试2"
            }
          ]
        },
        {
          "sortno": 2,
          "orgname": "",
          "level": 2,
          "name": "内设机构",
          "bzdesc": "3正12副",
          "formatname": "内设机构(3正12副)",
          "id": "O0000052_ns",
          "type": "dept",
          "orgid": "",
          "parentid": "O0000052",
          "child": [
            {
              "type": "user",
              "formatname": "【空缺】办公室主任",
              "id": "36f64b60ff6a4c13aa0ea46aa88f2856_0",
              "person_id": null,
              "jgid": "O0000052_ns",
              "job_name": "办公室主任",
              "name": "【空缺】办公室主任"
            },
            {
              "type": "user",
              "formatname": "【空缺】第二纪检监察室主任",
              "id": "c062dfa324634848b2e2543c2dc5af23_0",
              "person_id": null,
              "jgid": "O0000052_ns",
              "job_name": "第二纪检监察室主任",
              "name": "【空缺】第二纪检监察室主任"
            },
            {
              "type": "user",
              "formatname": "【空缺】第三纪检监察室主任",
              "id": "6ec5cf3d0289484e9bce9846cae6f872_0",
              "person_id": null,
              "jgid": "O0000052_ns",
              "job_name": "第三纪检监察室主任",
              "name": "【空缺】第三纪检监察室主任"
            },
            {
              "type": "user",
              "formatname": "【空缺】第四纪检监察室主任",
              "id": "b2eb97d12b9345c4901c7b41a9e36cd6_0",
              "person_id": null,
              "jgid": "O0000052_ns",
              "job_name": "第四纪检监察室主任",
              "name": "【空缺】第四纪检监察室主任"
            },
            {
              "type": "user",
              "formatname": "【空缺】第五纪检监察室主任",
              "id": "464b99cccf9e40abb060119749105782_0",
              "person_id": null,
              "jgid": "O0000052_ns",
              "job_name": "第五纪检监察室主任",
              "name": "【空缺】第五纪检监察室主任"
            },
            {
              "type": "user",
              "formatname": "【空缺】第六纪检监察室主任",
              "id": "2b9d9d46d20645d1b8f3a923e16ff60a_0",
              "person_id": null,
              "jgid": "O0000052_ns",
              "job_name": "第六纪检监察室主任",
              "name": "【空缺】第六纪检监察室主任"
            },
            {
              "type": "user",
              "formatname": "【空缺】案件审理室主任",
              "id": "23ee1c752bc74398977ac8868b7eb904_0",
              "person_id": null,
              "jgid": "O0000052_ns",
              "job_name": "案件审理室主任",
              "name": "【空缺】案件审理室主任"
            },
            {
              "type": "user",
              "formatname": "**011,1970-11,广东五华,2018-09任现级",
              "id": "2664_dyy_副组长",
              "person_id": "2664",
              "jgid": "O0000052_ns",
              "job_name": "副组长",
              "name": "**011,1970-11,广东五华,2018-09任现级"
            },
            {
              "type": "user",
              "formatname": "**041,1983-10,湖南常宁,2022-11任现级",
              "id": "4284_dyy_主任",
              "person_id": "4284",
              "jgid": "O0000052_ns",
              "job_name": "主任",
              "name": "**041,1983-10,湖南常宁,2022-11任现级"
            },
            {
              "type": "user",
              "formatname": "**112,1980-09,湖南耒阳,2021-07任现级",
              "id": "4374_dyy_部长",
              "person_id": "4374",
              "jgid": "O0000052_ns",
              "job_name": "部长",
              "name": "**112,1980-09,湖南耒阳,2021-07任现级"
            },
            {
              "type": "user",
              "formatname": "**071,1966-03,广东博罗,2020-12任现级",
              "id": "35_dyy_一级调研员",
              "person_id": "35",
              "jgid": "O0000052_ns",
              "job_name": "一级调研员",
              "name": "**071,1966-03,广东博罗,2020-12任现级"
            },
            {
              "type": "user",
              "formatname": "**234,1965-03,湖南双峰,2013-02/2021-06任现级",
              "id": "97_dyy_一级调研员",
              "person_id": "97",
              "jgid": "O0000052_ns",
              "job_name": "一级调研员",
              "name": "**234,1965-03,湖南双峰,2013-02/2021-06任现级"
            },
            {
              "type": "user",
              "formatname": "**779,1971-05,陕西西乡,2019-03/2022-08任现级",
              "id": "5942_dyy_二级调研员",
              "person_id": "5942",
              "jgid": "O0000052_ns",
              "job_name": "二级调研员",
              "name": "**779,1971-05,陕西西乡,2019-03/2022-08任现级"
            },
            {
              "type": "user",
              "formatname": "**559,1972-07,山西平遥,2022-08任现级",
              "id": "167_dyy_二级调研员",
              "person_id": "167",
              "jgid": "O0000052_ns",
              "job_name": "二级调研员",
              "name": "**559,1972-07,山西平遥,2022-08任现级"
            }
          ]
        },
        {
          "sortno": 3,
          "orgname": "",
          "level": 2,
          "name": "巡察组",
          "bzdesc": "3正3副",
          "formatname": "巡察组(3正3副)",
          "id": "O0000052_xcz",
          "type": "dept",
          "orgid": "",
          "parentid": "O0000052",
          "child": [
            {
              "sortno": 18,
              "orgname": "区委第一巡察组",
              "level": 3,
              "name": "区委第一巡察组",
              "bzdesc": "1正1副",
              "formatname": "区委第一巡察组(1正1副)",
              "id": "O0000064",
              "type": "dept",
              "orgid": "O0000064",
              "parentid": "O0000052_xcz",
              "child": [
                {
                  "type": "user",
                  "formatname": "【空缺】组长",
                  "id": "16dcfaf4007f4b3bad6af6d50f584adf_0",
                  "person_id": null,
                  "jgid": "O0000064",
                  "job_name": "组长",
                  "name": "【空缺】组长"
                },
                {
                  "type": "user",
                  "formatname": "【空缺】副组长",
                  "id": "5eb0522e48fd4503b16a3d8da2beabc1_0",
                  "person_id": null,
                  "jgid": "O0000064",
                  "job_name": "副组长",
                  "name": "【空缺】副组长"
                }
              ]
            },
            {
              "sortno": 20,
              "orgname": "区委第二巡察组",
              "level": 3,
              "name": "区委第二巡察组",
              "bzdesc": "1正1副",
              "formatname": "区委第二巡察组(1正1副)",
              "id": "O0000065",
              "type": "dept",
              "orgid": "O0000065",
              "parentid": "O0000052_xcz",
              "child": [
                {
                  "type": "user",
                  "formatname": "**213,1975-01,广东紫金,2018-09任现级",
                  "id": "05782142203f4527bc22df7fbfe549af_0",
                  "person_id": "2399",
                  "jgid": "O0000065",
                  "job_name": "区委第二巡察组组长",
                  "name": "**213,1975-01,广东紫金,2018-09任现级"
                },
                {
                  "type": "user",
                  "formatname": "【空缺】副组长",
                  "id": "a2e5ca73bc2f4725b4d36d61fb8b344a_0",
                  "person_id": null,
                  "jgid": "O0000065",
                  "job_name": "副组长",
                  "name": "【空缺】副组长"
                }
              ]
            },
            {
              "sortno": 21,
              "orgname": "区委第四巡察组",
              "level": 3,
              "name": "区委第四巡察组",
              "bzdesc": "1正1副",
              "formatname": "区委第四巡察组(1正1副)",
              "id": "O1001172",
              "type": "dept",
              "orgid": "O1001172",
              "parentid": "O0000052_xcz",
              "child": [
                {
                  "type": "user",
                  "formatname": "**630,1971-11,黑龙江望奎,2022-05任现级",
                  "id": "cbd22eff7fc3483a827c546228757415_0",
                  "person_id": "3305",
                  "jgid": "O1001172",
                  "job_name": "组长",
                  "name": "**630,1971-11,黑龙江望奎,2022-05任现级"
                },
                {
                  "type": "user",
                  "formatname": "**621,1979-10,广东佛山,2022-05任现级",
                  "id": "57403bd0008e4032bcacca1fa312c7ab_0",
                  "person_id": "5324",
                  "jgid": "O1001172",
                  "job_name": "副组长",
                  "name": "**621,1979-10,广东佛山,2022-05任现级"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "sortno": 6,
      "orgname": "区委组织部",
      "level": 1,
      "name": "区委组织部",
      "bzdesc": "1+1+2正3+3+2副1六级",
      "formatname": "区委组织部(1+1+2正3+3+2副1六级)",
      "id": "O0000067",
      "type": "dept",
      "orgid": "O0000067",
      "parentid": "0",
      "child": [
        {
          "sortno": 1,
          "orgname": null,
          "level": 2,
          "name": "机关",
          "bzdesc": "3+1正4+1副",
          "formatname": "机关(3+1正4+1副)",
          "id": "O0000067_jiguan",
          "type": "dept",
          "orgid": null,
          "parentid": "O0000067",
          "child": []
        },
        {
          "sortno": 2,
          "orgname": null,
          "level": 2,
          "name": "巡察组",
          "bzdesc": "2正2副",
          "formatname": "巡察组(2正2副)",
          "id": "O0000067_xcz",
          "type": "dept",
          "orgid": null,
          "parentid": "O0000067",
          "child": []
        }
      ]
    },
    {
      "sortno": 7,
      "orgname": "区委宣传部",
      "level": 1,
      "name": "区委宣传部",
      "bzdesc": "1+1正3+1副2六级",
      "formatname": "区委宣传部(1+1正3+1副2六级)",
      "id": "O0000090",
      "type": "dept",
      "orgid": "O0000090",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**052,1974-12,河南汤阴,2015-04任现级",
          "id": "3496_dyy_副部长",
          "person_id": "3496",
          "jgid": "O0000090",
          "job_name": "副部长",
          "name": "**052,1974-12,河南汤阴,2015-04任现级"
        },
        {
          "type": "user",
          "formatname": "**528,1965-05,江苏江阴,2013-02/2021-04任现级",
          "id": "3485_dyy_二级调研员",
          "person_id": "3485",
          "jgid": "O0000090",
          "job_name": "二级调研员",
          "name": "**528,1965-05,江苏江阴,2013-02/2021-04任现级"
        },
        {
          "type": "user",
          "formatname": "**649,1977-12,安徽黄山,2022-07任现级",
          "id": "2505_dyy_四级调研员",
          "person_id": "2505",
          "jgid": "O0000090",
          "job_name": "四级调研员",
          "name": "**649,1977-12,安徽黄山,2022-07任现级"
        }
      ]
    },
    {
      "sortno": 8,
      "orgname": "区委统战部",
      "level": 1,
      "name": "区委统战部",
      "bzdesc": "1+1正1副",
      "formatname": "区委统战部(1+1正1副)",
      "id": "O0000105",
      "type": "dept",
      "orgid": "O0000105",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**305,1972-12,河南罗山,2016-10任现级",
          "id": "195_dyy_局长",
          "person_id": "195",
          "jgid": "O0000105",
          "job_name": "局长、副部长",
          "name": "**305,1972-12,河南罗山,2016-10任现级"
        },
        {
          "type": "user",
          "formatname": "**970,1965-01,广东揭西,2013-02/2021-06任现级",
          "id": "2404_dyy_一级调研员",
          "person_id": "2404",
          "jgid": "O0000105",
          "job_name": "一级调研员",
          "name": "**970,1965-01,广东揭西,2013-02/2021-06任现级"
        },
        {
          "type": "user",
          "formatname": "**01X,1973-11,湖南衡山,2018-09/2021-07任现级",
          "id": "5885_dyy_三级调研员",
          "person_id": "5885",
          "jgid": "O0000105",
          "job_name": "三级调研员",
          "name": "**01X,1973-11,湖南衡山,2018-09/2021-07任现级"
        },
        {
          "type": "user",
          "formatname": "**234,1964-12,广东恩平,2016-05/2019-06任现级",
          "id": "4030_dyy_四级调研员",
          "person_id": "4030",
          "jgid": "O0000105",
          "job_name": "四级调研员",
          "name": "**234,1964-12,广东恩平,2016-05/2019-06任现级"
        }
      ]
    },
    {
      "sortno": 9,
      "orgname": "区委政法委",
      "level": 1,
      "name": "区委政法委",
      "bzdesc": "1正4副",
      "formatname": "区委政法委(1正4副)",
      "id": "O0000111",
      "type": "dept",
      "orgid": "O0000111",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**070,1983-07,湖北随州,2021-12任现级",
          "id": "4377_dyy_常务副主任",
          "person_id": "4377",
          "jgid": "O0000111",
          "job_name": "常务副主任",
          "name": "**070,1983-07,湖北随州,2021-12任现级"
        },
        {
          "type": "user",
          "formatname": "**234,1963-11,广东丰顺,2002-06/2021-02任现级",
          "id": "624_dyy_三级调研员",
          "person_id": "624",
          "jgid": "O0000111",
          "job_name": "三级调研员",
          "name": "**234,1963-11,广东丰顺,2002-06/2021-02任现级"
        },
        {
          "type": "user",
          "formatname": "**631,1964-09,广东兴宁,2009-09/2022-03任现级",
          "id": "3847_dyy_三级调研员",
          "person_id": "3847",
          "jgid": "O0000111",
          "job_name": "三级调研员",
          "name": "**631,1964-09,广东兴宁,2009-09/2022-03任现级"
        },
        {
          "type": "user",
          "formatname": "**49X,1968-10,江苏苏州,2009-07任现级",
          "id": "501_dyy_四级调研员",
          "person_id": "501",
          "jgid": "O0000111",
          "job_name": "四级调研员",
          "name": "**49X,1968-10,江苏苏州,2009-07任现级"
        },
        {
          "type": "user",
          "formatname": "**012,1969-12,广东紫金,2020-04任现级",
          "id": "2289_dyy_四级调研员",
          "person_id": "2289",
          "jgid": "O0000111",
          "job_name": "四级调研员",
          "name": "**012,1969-12,广东紫金,2020-04任现级"
        }
      ]
    },
    {
      "sortno": 10,
      "orgname": "区网格管理中心",
      "level": 1,
      "name": "区网格管理中心",
      "bzdesc": "1正2副",
      "formatname": "区网格管理中心(1正2副)",
      "id": "O0000123",
      "type": "dept",
      "orgid": "O0000123",
      "parentid": "0",
      "child": []
    },
    {
      "sortno": 11,
      "orgname": "区工商联",
      "level": 1,
      "name": "区工商联",
      "bzdesc": "1正2副",
      "formatname": "区工商联(1正2副)",
      "id": "O0000131",
      "type": "dept",
      "orgid": "O0000131",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**099,1967-11,广东惠州,2012-02/2021-03任现级",
          "id": "1650_dyy_一级调研员",
          "person_id": "1650",
          "jgid": "O0000131",
          "job_name": "一级调研员",
          "name": "**099,1967-11,广东惠州,2012-02/2021-03任现级"
        }
      ]
    },
    {
      "sortno": 12,
      "orgname": "区总工会",
      "level": 1,
      "name": "区总工会",
      "bzdesc": "1正2副",
      "formatname": "区总工会(1正2副)",
      "id": "O0000138",
      "type": "dept",
      "orgid": "O0000138",
      "parentid": "0",
      "child": []
    },
    {
      "sortno": 13,
      "orgname": "团区委",
      "level": 1,
      "name": "团区委",
      "bzdesc": "1正2副",
      "formatname": "团区委(1正2副)",
      "id": "O0000147",
      "type": "dept",
      "orgid": "O0000147",
      "parentid": "0",
      "child": []
    },
    {
      "sortno": 14,
      "orgname": "区妇联",
      "level": 1,
      "name": "区妇联",
      "bzdesc": "1正2副",
      "formatname": "区妇联(1正2副)",
      "id": "O0000155",
      "type": "dept",
      "orgid": "O0000155",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**961,1964-07,广东平远,2012-04/2021-03任现级",
          "id": "4880_dyy_一级调研员",
          "person_id": "4880",
          "jgid": "O0000155",
          "job_name": "一级调研员",
          "name": "**961,1964-07,广东平远,2012-04/2021-03任现级"
        }
      ]
    },
    {
      "sortno": 15,
      "orgname": "区委党校（区培训中心、深圳市电大南山分校）",
      "level": 1,
      "name": "区委党校（区培训中心、深圳市电大南山分校）",
      "bzdesc": "1正2副",
      "formatname": "区委党校（区培训中心、深圳市电大南山分校）(1正2副)",
      "id": "O0000165",
      "type": "dept",
      "orgid": "O0000165",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**044,1969-11,安徽淮南,2020-04任现级",
          "id": "236_dyy_四级调研员",
          "person_id": "236",
          "jgid": "O0000165",
          "job_name": "四级调研员",
          "name": "**044,1969-11,安徽淮南,2020-04任现级"
        }
      ]
    },
    {
      "sortno": 16,
      "orgname": "区残联",
      "level": 1,
      "name": "区残联",
      "bzdesc": "1正1副",
      "formatname": "区残联(1正1副)",
      "id": "O0000174",
      "type": "dept",
      "orgid": "O0000174",
      "parentid": "0",
      "child": []
    },
    {
      "sortno": 17,
      "orgname": "区发展改革局",
      "level": 1,
      "name": "区发展改革局",
      "bzdesc": "1正3副1五级2六级",
      "formatname": "区发展改革局(1正3副1五级2六级)",
      "id": "O0000180",
      "type": "dept",
      "orgid": "O0000180",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**639,1970-09,广东兴宁,2022-03任现级",
          "id": "58_dyy_二级调研员",
          "person_id": "58",
          "jgid": "O0000180",
          "job_name": "党组成员、二级调研员",
          "name": "**639,1970-09,广东兴宁,2022-03任现级"
        },
        {
          "type": "user",
          "formatname": "**612,1969-11,湖南新晃,2015-10/2022-11任现级",
          "id": "546_dyy_三级调研员",
          "person_id": "546",
          "jgid": "O0000180",
          "job_name": "三级调研员",
          "name": "**612,1969-11,湖南新晃,2015-10/2022-11任现级"
        }
      ]
    },
    {
      "sortno": 18,
      "orgname": "区教育局",
      "level": 1,
      "name": "区教育局",
      "bzdesc": "1正5副1六级",
      "formatname": "区教育局(1正5副1六级)",
      "id": "O0000191",
      "type": "dept",
      "orgid": "O0000191",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**639,1967-12,重庆,2021-07任现级",
          "id": "4990_dyy_二级调研员",
          "person_id": "4990",
          "jgid": "O0000191",
          "job_name": "党组成员、二级调研员",
          "name": "**639,1967-12,重庆,2021-07任现级"
        },
        {
          "type": "user",
          "formatname": "**234,1970-03,广东汕头,2007-07/2022-07任现级",
          "id": "587_dyy_四级调研员",
          "person_id": "587",
          "jgid": "O0000191",
          "job_name": "四级调研员",
          "name": "**234,1970-03,广东汕头,2007-07/2022-07任现级"
        }
      ]
    },
    {
      "sortno": 19,
      "orgname": "区科技创新局",
      "level": 1,
      "name": "区科技创新局",
      "bzdesc": "1正3+1副1五级2六级",
      "formatname": "区科技创新局(1正3+1副1五级2六级)",
      "id": "O0000215",
      "type": "dept",
      "orgid": "O0000215",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**128,1977-11,山东青岛,2021-12任现级",
          "id": "3958_dyy_四级调研员",
          "person_id": "3958",
          "jgid": "O0000215",
          "job_name": "四级调研员",
          "name": "**128,1977-11,山东青岛,2021-12任现级"
        },
        {
          "type": "user",
          "formatname": "**613,1970-07,广东佛山,2019-04/2019-06任现级",
          "id": "610_dyy_四级调研员",
          "person_id": "610",
          "jgid": "O0000215",
          "job_name": "四级调研员",
          "name": "**613,1970-07,广东佛山,2019-04/2019-06任现级"
        }
      ]
    },
    {
      "sortno": 20,
      "orgname": "区工业和信息化局",
      "level": 1,
      "name": "区工业和信息化局",
      "bzdesc": "1正3副1五级2六级",
      "formatname": "区工业和信息化局(1正3副1五级2六级)",
      "id": "O0000229",
      "type": "dept",
      "orgid": "O0000229",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**522,1977-07,河南孟津,2021-02任现级",
          "id": "2658_dyy_科长",
          "person_id": "2658",
          "jgid": "O0000229",
          "job_name": "科长",
          "name": "**522,1977-07,河南孟津,2021-02任现级"
        },
        {
          "type": "user",
          "formatname": "**714,1968-08,江西峡江,2022-03任现级",
          "id": "755_dyy_二级调研员",
          "person_id": "755",
          "jgid": "O0000229",
          "job_name": "二级调研员",
          "name": "**714,1968-08,江西峡江,2022-03任现级"
        },
        {
          "type": "user",
          "formatname": "**038,1980-10,山东淄博,2021-06任现级",
          "id": "3486890976453957_dyy_四级调研员",
          "person_id": "3486890976453957",
          "jgid": "O0000229",
          "job_name": "四级调研员",
          "name": "**038,1980-10,山东淄博,2021-06任现级"
        }
      ]
    },
    {
      "sortno": 21,
      "orgname": "区民政局",
      "level": 1,
      "name": "区民政局",
      "bzdesc": "1正2副",
      "formatname": "区民政局(1正2副)",
      "id": "O0000249",
      "type": "dept",
      "orgid": "O0000249",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**915,1967-03,广东雷州,2007-04/2021-03任现级",
          "id": "33_dyy_一级调研员",
          "person_id": "33",
          "jgid": "O0000249",
          "job_name": "一级调研员",
          "name": "**915,1967-03,广东雷州,2007-04/2021-03任现级"
        }
      ]
    },
    {
      "sortno": 22,
      "orgname": "区司法局",
      "level": 1,
      "name": "区司法局",
      "bzdesc": "1正3副",
      "formatname": "区司法局(1正3副)",
      "id": "O0000264",
      "type": "dept",
      "orgid": "O0000264",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**614,1966-09,广东深圳,2009-07/2021-02任现级",
          "id": "580_dyy_副局长",
          "person_id": "580",
          "jgid": "O0000264",
          "job_name": "副局长、党组成员、三级调研员",
          "name": "**614,1966-09,广东深圳,2009-07/2021-02任现级"
        },
        {
          "type": "user",
          "formatname": "**524,1971-10,广东惠州,2012-05/2021-12任现级",
          "id": "1860_dyy_三级调研员",
          "person_id": "1860",
          "jgid": "O0000264",
          "job_name": "三级调研员",
          "name": "**524,1971-10,广东惠州,2012-05/2021-12任现级"
        },
        {
          "type": "user",
          "formatname": "**020,1971-01,重庆,2012-04/2021-07任现级",
          "id": "2885_dyy_三级调研员",
          "person_id": "2885",
          "jgid": "O0000264",
          "job_name": "党组成员、副局长、三级调研员",
          "name": "**020,1971-01,重庆,2012-04/2021-07任现级"
        },
        {
          "type": "user",
          "formatname": "**810,1968-05,广东汕头,2012-05/2021-02任现级",
          "id": "663_dyy_三级调研员",
          "person_id": "663",
          "jgid": "O0000264",
          "job_name": "三级调研员",
          "name": "**810,1968-05,广东汕头,2012-05/2021-02任现级"
        }
      ]
    },
    {
      "sortno": 23,
      "orgname": "区财政局",
      "level": 1,
      "name": "区财政局",
      "bzdesc": "1正3副1六级",
      "formatname": "区财政局(1正3副1六级)",
      "id": "O0000278",
      "type": "dept",
      "orgid": "O0000278",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "家庭成员换行,1986-12,广东汕头,2021-05任现级",
          "id": "5152_dyy_副科长",
          "person_id": "5152",
          "jgid": "O0000278",
          "job_name": "副科长、二级主任科员",
          "name": "家庭成员换行,1986-12,广东汕头,2021-05任现级"
        }
      ]
    },
    {
      "sortno": 24,
      "orgname": "区人力资源局",
      "level": 1,
      "name": "区人力资源局",
      "bzdesc": "1正3+1副1六级",
      "formatname": "区人力资源局(1正3+1副1六级)",
      "id": "O0000289",
      "type": "dept",
      "orgid": "O0000289",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**625,1972-02,2021-12任现级",
          "id": "4253_dyy_四级调研员",
          "person_id": "4253",
          "jgid": "O0000289",
          "job_name": "四级调研员",
          "name": "**625,1972-02,2021-12任现级"
        }
      ]
    },
    {
      "sortno": 25,
      "orgname": "区住房和建设局",
      "level": 1,
      "name": "区住房和建设局",
      "bzdesc": "1正4副1六级",
      "formatname": "区住房和建设局(1正4副1六级)",
      "id": "O0000314",
      "type": "dept",
      "orgid": "O0000314",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**613,1971-05,广东丰顺,2012-05/2021-07任现级",
          "id": "4370_dyy_三级调研员",
          "person_id": "4370",
          "jgid": "O0000314",
          "job_name": "党组成员、副局长、三级调研员",
          "name": "**613,1971-05,广东丰顺,2012-05/2021-07任现级"
        },
        {
          "type": "user",
          "formatname": "**964,1965-09,江苏扬州,2016-10任现级",
          "id": "3355602214753348_dyy_四级调研员",
          "person_id": "3355602214753348",
          "jgid": "O0000314",
          "job_name": "四级调研员",
          "name": "**964,1965-09,江苏扬州,2016-10任现级"
        },
        {
          "type": "user",
          "formatname": "**839,1975-03,江西永新,2021-03任现级",
          "id": "4444_dyy_四级调研员",
          "person_id": "4444",
          "jgid": "O0000314",
          "job_name": "四级调研员",
          "name": "**839,1975-03,江西永新,2021-03任现级"
        },
        {
          "type": "user",
          "formatname": "**626,1969-11,广西百色,2019-06任现级",
          "id": "824_dyy_四级调研员",
          "person_id": "824",
          "jgid": "O0000314",
          "job_name": "四级调研员",
          "name": "**626,1969-11,广西百色,2019-06任现级"
        }
      ]
    },
    {
      "sortno": 26,
      "orgname": "区水务局",
      "level": 1,
      "name": "区水务局",
      "bzdesc": "1正2副1六级",
      "formatname": "区水务局(1正2副1六级)",
      "id": "O0000332",
      "type": "dept",
      "orgid": "O0000332",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**816,1964-05,江西湖口,2014-10任现级",
          "id": "3985_dyy_二级高级主办",
          "person_id": "3985",
          "jgid": "O0000332",
          "job_name": "二级高级主办",
          "name": "**816,1964-05,江西湖口,2014-10任现级"
        },
        {
          "type": "user",
          "formatname": "**024,1968-02,陕西大荔,2019-06任现级",
          "id": "1124_dyy_四级高级主办",
          "person_id": "1124",
          "jgid": "O0000332",
          "job_name": "四级高级主办",
          "name": "**024,1968-02,陕西大荔,2019-06任现级"
        },
        {
          "type": "user",
          "formatname": "**234,1963-10,广东饶平,2017-02任现级",
          "id": "1322_dyy_四级高级主办",
          "person_id": "1322",
          "jgid": "O0000332",
          "job_name": "四级高级主办",
          "name": "**234,1963-10,广东饶平,2017-02任现级"
        }
      ]
    },
    {
      "sortno": 27,
      "orgname": "区文化广电旅游体育局",
      "level": 1,
      "name": "区文化广电旅游体育局",
      "bzdesc": "1正3副2六级",
      "formatname": "区文化广电旅游体育局(1正3副2六级)",
      "id": "O0000346",
      "type": "dept",
      "orgid": "O0000346",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**972,1966-03,河南南阳,2016-08/2019-06任现级",
          "id": "192_dyy_二级调研员",
          "person_id": "192",
          "jgid": "O0000346",
          "job_name": "二级调研员",
          "name": "**972,1966-03,河南南阳,2016-08/2019-06任现级"
        },
        {
          "type": "user",
          "formatname": "**019,1973-07,河南汝南,2012-05/2021-07任现级",
          "id": "735_dyy_三级调研员",
          "person_id": "735",
          "jgid": "O0000346",
          "job_name": "副局长、党组成员、三级调研员",
          "name": "**019,1973-07,河南汝南,2012-05/2021-07任现级"
        },
        {
          "type": "user",
          "formatname": "**823,1975-06,辽宁大连,2017-05任现级",
          "id": "986286_dyy_四级高级主办",
          "person_id": "986286",
          "jgid": "O0000346",
          "job_name": "四级高级主办",
          "name": "**823,1975-06,辽宁大连,2017-05任现级"
        },
        {
          "type": "user",
          "formatname": "**851,1976-03,广东化州,2021-03任现级",
          "id": "1180_dyy_四级高级主办",
          "person_id": "1180",
          "jgid": "O0000346",
          "job_name": "四级高级主办",
          "name": "**851,1976-03,广东化州,2021-03任现级"
        }
      ]
    },
    {
      "sortno": 28,
      "orgname": "区卫生健康局",
      "level": 1,
      "name": "区卫生健康局",
      "bzdesc": "1正5副2五级5六级",
      "formatname": "区卫生健康局(1正5副2五级5六级)",
      "id": "O0000369",
      "type": "dept",
      "orgid": "O0000369",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**03X,1970-10,山东莱西,2012-05/2021-07任现级",
          "id": "2974_dyy_二级调研员",
          "person_id": "2974",
          "jgid": "O0000369",
          "job_name": "党组成员、副局长、二级调研员",
          "name": "**03X,1970-10,山东莱西,2012-05/2021-07任现级"
        },
        {
          "type": "user",
          "formatname": "**04X,1971-01,四川邻水,2021-03任现级",
          "id": "1238_dyy_四级调研员",
          "person_id": "1238",
          "jgid": "O0000369",
          "job_name": "四级调研员、专职委员",
          "name": "**04X,1971-01,四川邻水,2021-03任现级"
        }
      ]
    },
    {
      "sortno": 29,
      "orgname": "区退役军人事务局",
      "level": 1,
      "name": "区退役军人事务局",
      "bzdesc": "1正2副",
      "formatname": "区退役军人事务局(1正2副)",
      "id": "O0000391",
      "type": "dept",
      "orgid": "O0000391",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**817,1967-05,海南文昌,2015-01/2021-07任现级",
          "id": "6109_dyy_副局长",
          "person_id": "6109",
          "jgid": "O0000391",
          "job_name": "党组成员、副局长、二级调研员",
          "name": "**817,1967-05,海南文昌,2015-01/2021-07任现级"
        },
        {
          "type": "user",
          "formatname": "**234,1966-03,湖南南县,2014-08任现级",
          "id": "4834_dyy_二级调研员",
          "person_id": "4834",
          "jgid": "O0000391",
          "job_name": "二级调研员",
          "name": "**234,1966-03,湖南南县,2014-08任现级"
        }
      ]
    },
    {
      "sortno": 30,
      "orgname": "区应急管理局",
      "level": 1,
      "name": "区应急管理局",
      "bzdesc": "1正4副1六级",
      "formatname": "区应急管理局(1正4副1六级)",
      "id": "O0000398",
      "type": "dept",
      "orgid": "O0000398",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**017,1967-02,湖南衡阳,2012-05/2021-03任现级",
          "id": "2519_dyy_三级调研员",
          "person_id": "2519",
          "jgid": "O0000398",
          "job_name": "三级调研员",
          "name": "**017,1967-02,湖南衡阳,2012-05/2021-03任现级"
        },
        {
          "type": "user",
          "formatname": "**019,1973-03,浙江淳安,2021-01任现级",
          "id": "987012_dyy_四级调研员",
          "person_id": "987012",
          "jgid": "O0000398",
          "job_name": "四级调研员",
          "name": "**019,1973-03,浙江淳安,2021-01任现级"
        }
      ]
    },
    {
      "sortno": 31,
      "orgname": "区审计局",
      "level": 1,
      "name": "区审计局",
      "bzdesc": "1正3副",
      "formatname": "区审计局(1正3副)",
      "id": "O0000417",
      "type": "dept",
      "orgid": "O0000417",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**234,1963-10,广东普宁,2012-05/2019-06任现级",
          "id": "90_dyy_四级调研员",
          "person_id": "90",
          "jgid": "O0000417",
          "job_name": "四级调研员",
          "name": "**234,1963-10,广东普宁,2012-05/2019-06任现级"
        }
      ]
    },
    {
      "sortno": 32,
      "orgname": "区国有资产监督管理局",
      "level": 1,
      "name": "区国有资产监督管理局",
      "bzdesc": "1正1副1六级",
      "formatname": "区国有资产监督管理局(1正1副1六级)",
      "id": "O0000429",
      "type": "dept",
      "orgid": "O0000429",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**630,1981-03,广东博罗,2019-03/2021-07任现级",
          "id": "3519_dyy_三级调研员",
          "person_id": "3519",
          "jgid": "O0000429",
          "job_name": "党委委员、三级调研员",
          "name": "**630,1981-03,广东博罗,2019-03/2021-07任现级"
        }
      ]
    },
    {
      "sortno": 33,
      "orgname": "区统计局",
      "level": 1,
      "name": "区统计局",
      "bzdesc": "1正2副1六级",
      "formatname": "区统计局(1正2副1六级)",
      "id": "O0000438",
      "type": "dept",
      "orgid": "O0000438",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**092,1970-12,广东丰顺,2012-05任现级",
          "id": "1149_dyy_副局长",
          "person_id": "1149",
          "jgid": "O0000438",
          "job_name": "党组成员、副局长",
          "name": "**092,1970-12,广东丰顺,2012-05任现级"
        },
        {
          "type": "user",
          "formatname": "**215,1966-10,2019-06任现级",
          "id": "545_dyy_四级调研员",
          "person_id": "545",
          "jgid": "O0000438",
          "job_name": "四级调研员",
          "name": "**215,1966-10,2019-06任现级"
        },
        {
          "type": "user",
          "formatname": "**426,1975-05,湖南宜章,2020-04任现级",
          "id": "1152_dyy_四级调研员",
          "person_id": "1152",
          "jgid": "O0000438",
          "job_name": "四级调研员",
          "name": "**426,1975-05,湖南宜章,2020-04任现级"
        }
      ]
    },
    {
      "sortno": 34,
      "orgname": "区城市管理和综合执法局",
      "level": 1,
      "name": "区城市管理和综合执法局",
      "bzdesc": "1正5副1六级",
      "formatname": "区城市管理和综合执法局(1正5副1六级)",
      "id": "O0000450",
      "type": "dept",
      "orgid": "O0000450",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**813,1968-12,广东丰顺,2021-02任现级",
          "id": "4899_dyy_四级高级主办",
          "person_id": "4899",
          "jgid": "O0000450",
          "job_name": "四级高级主办",
          "name": "**813,1968-12,广东丰顺,2021-02任现级"
        }
      ]
    },
    {
      "sortno": 35,
      "orgname": "区信访局",
      "level": 1,
      "name": "区信访局",
      "bzdesc": "1正2副",
      "formatname": "区信访局(1正2副)",
      "id": "O0000475",
      "type": "dept",
      "orgid": "O0000475",
      "parentid": "0",
      "child": []
    },
    {
      "sortno": 36,
      "orgname": "区政务服务和数据管理局",
      "level": 1,
      "name": "区政务服务和数据管理局",
      "bzdesc": "1正2副1五级3六级",
      "formatname": "区政务服务和数据管理局(1正2副1五级3六级)",
      "id": "O0000483",
      "type": "dept",
      "orgid": "O0000483",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**622,1974-03,湖北孝感,2012-07/2021-03任现级",
          "id": "3564_dyy_科长",
          "person_id": "3564",
          "jgid": "O0000483",
          "job_name": "深圳市南山区政务服务数据管理局科长、深圳市南山区政务服务数据管理局四级调研员",
          "name": "**622,1974-03,湖北孝感,2012-07/2021-03任现级"
        }
      ]
    },
    {
      "sortno": 37,
      "orgname": "区规划土地监察局",
      "level": 1,
      "name": "区规划土地监察局",
      "bzdesc": "1正2副",
      "formatname": "区规划土地监察局(1正2副)",
      "id": "O0000494",
      "type": "dept",
      "orgid": "O0000494",
      "parentid": "0",
      "child": []
    },
    {
      "sortno": 38,
      "orgname": "区建筑工务署",
      "level": 1,
      "name": "区建筑工务署",
      "bzdesc": "1五级4六级",
      "formatname": "区建筑工务署(1五级4六级)",
      "id": "O0000504",
      "type": "dept",
      "orgid": "O0000504",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**010,1964-03,四川邛崃,2012-05任现级",
          "id": "855_dyy_六级其他管理岗位职员",
          "person_id": "855",
          "jgid": "O0000504",
          "job_name": "六级其他管理岗位职员",
          "name": "**010,1964-03,四川邛崃,2012-05任现级"
        }
      ]
    },
    {
      "sortno": 39,
      "orgname": "区城市更新和土地整备局",
      "level": 1,
      "name": "区城市更新和土地整备局",
      "bzdesc": "1正4副",
      "formatname": "区城市更新和土地整备局(1正4副)",
      "id": "O0000520",
      "type": "dept",
      "orgid": "O0000520",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**858,1970-10,广东惠来,2018-02任现级",
          "id": "2060_dyy_党组书记",
          "person_id": "2060",
          "jgid": "O0000520",
          "job_name": "区城市更新和土地整备局党组书记",
          "name": "**858,1970-10,广东惠来,2018-02任现级"
        },
        {
          "type": "user",
          "formatname": "**020,1979-08,湖北松滋,2021-07任现级",
          "id": "2784_dyy_党组成员",
          "person_id": "2784",
          "jgid": "O0000520",
          "job_name": "区城市更新和土地整备局党组成员",
          "name": "**020,1979-08,湖北松滋,2021-07任现级"
        },
        {
          "type": "user",
          "formatname": "**413,1964-04,广东兴宁,2014-05/2021-02任现级",
          "id": "867_dyy_三级调研员",
          "person_id": "867",
          "jgid": "O0000520",
          "job_name": "南山区城市更新和土地整备局三级调研员",
          "name": "**413,1964-04,广东兴宁,2014-05/2021-02任现级"
        },
        {
          "type": "user",
          "formatname": "沈伟健,1972-01,广东湛江,2021-01任现级",
          "id": "987013_dyy_四级调研员",
          "person_id": "987013",
          "jgid": "O0000520",
          "job_name": "南山区城市更新和土地整备局四级调研员",
          "name": "沈伟健,1972-01,广东湛江,2021-01任现级"
        },
        {
          "type": "user",
          "formatname": "**013,1967-02,河南开封,2019-06任现级",
          "id": "4308_dyy_四级调研员",
          "person_id": "4308",
          "jgid": "O0000520",
          "job_name": "南山区城市更新和土地整备局四级调研员",
          "name": "**013,1967-02,河南开封,2019-06任现级"
        }
      ]
    },
    {
      "sortno": 40,
      "orgname": "区机关事务管理局",
      "level": 1,
      "name": "区机关事务管理局",
      "bzdesc": "1正2副",
      "formatname": "区机关事务管理局(1正2副)",
      "id": "O0000533",
      "type": "dept",
      "orgid": "O0000533",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**112,1965-11,广东紫金,2021-12任现级",
          "id": "1511_dyy_四级调研员",
          "person_id": "1511",
          "jgid": "O0000533",
          "job_name": "四级调研员",
          "name": "**112,1965-11,广东紫金,2021-12任现级"
        }
      ]
    },
    {
      "sortno": 42,
      "orgname": "区企业发展服务中心",
      "level": 1,
      "name": "区企业发展服务中心",
      "bzdesc": "1五级4六级",
      "formatname": "区企业发展服务中心(1五级4六级)",
      "id": "O0000565",
      "type": "dept",
      "orgid": "O0000565",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**127,1974-11,湖南长沙,2020-04任现级",
          "id": "284_dyy_六级其他管理岗位职员",
          "person_id": "284",
          "jgid": "O0000565",
          "job_name": "六级其他管理岗位职员",
          "name": "**127,1974-11,湖南长沙,2020-04任现级"
        },
        {
          "type": "user",
          "formatname": "**234,1963-11,吉林松原,2013-08任现级",
          "id": "83_dyy_五级其他管理岗位职员",
          "person_id": "83",
          "jgid": "O0000565",
          "job_name": "五级其他管理岗位职员",
          "name": "**234,1963-11,吉林松原,2013-08任现级"
        }
      ]
    },
    {
      "sortno": 43,
      "orgname": "区会计核算管理中心",
      "level": 1,
      "name": "区会计核算管理中心",
      "bzdesc": "1副",
      "formatname": "区会计核算管理中心(1副)",
      "id": "O0000555",
      "type": "dept",
      "orgid": "O0000555",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**620,1966-04,湖北武汉,2017-09任现级",
          "id": "1508_dyy_主任",
          "person_id": "1508",
          "jgid": "O0000555",
          "job_name": "党组书记、南山区会计核算管理中心主任",
          "name": "**620,1966-04,湖北武汉,2017-09任现级"
        },
        {
          "type": "user",
          "formatname": "**048,1979-10,河南兰考,2021-12任现级",
          "id": "4900_dyy_四级调研员",
          "person_id": "4900",
          "jgid": "O0000555",
          "job_name": "党组成员、四级调研员",
          "name": "**048,1979-10,河南兰考,2021-12任现级"
        }
      ]
    },
    {
      "sortno": 45,
      "orgname": "区消费者委员会秘书处",
      "level": 1,
      "name": "区消费者委员会秘书处",
      "bzdesc": "",
      "formatname": "区消费者委员会秘书处",
      "id": "O1001163",
      "type": "dept",
      "orgid": "O1001163",
      "parentid": "0",
      "child": []
    },
    {
      "sortno": 45,
      "orgname": "选举联络人事任免工作委员会",
      "level": 1,
      "name": "选举联络人事任免工作委员会",
      "bzdesc": "1正",
      "formatname": "选举联络人事任免工作委员会(1正)",
      "id": "O0000033",
      "type": "dept",
      "orgid": "O0000033",
      "parentid": "0",
      "child": []
    },
    {
      "sortno": 46,
      "orgname": "法制和内务司法工作委员会",
      "level": 1,
      "name": "法制和内务司法工作委员会",
      "bzdesc": "1正",
      "formatname": "法制和内务司法工作委员会(1正)",
      "id": "O0000034",
      "type": "dept",
      "orgid": "O0000034",
      "parentid": "0",
      "child": []
    },
    {
      "sortno": 47,
      "orgname": "南头街道",
      "level": 1,
      "name": "南头街道",
      "bzdesc": "3正8+1副1六级",
      "formatname": "南头街道(3正8+1副1六级)",
      "id": "O0000580",
      "type": "dept",
      "orgid": "O0000580",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**998,1965-09,江西九江,2018-09任现级",
          "id": "1905_dyy_党工委副书记",
          "person_id": "1905",
          "jgid": "O0000580",
          "job_name": "党工委副书记、主任",
          "name": "**998,1965-09,江西九江,2018-09任现级"
        },
        {
          "type": "user",
          "formatname": "**025,1971-09,广东紫金,2019-01/2019-06任现级",
          "id": "557_dyy_二级调研员",
          "person_id": "557",
          "jgid": "O0000580",
          "job_name": "二级调研员",
          "name": "**025,1971-09,广东紫金,2019-01/2019-06任现级"
        },
        {
          "type": "user",
          "formatname": "**626,1966-05,湖南临澧,2018-09/2019-06任现级",
          "id": "199_dyy_二级调研员",
          "person_id": "199",
          "jgid": "O0000580",
          "job_name": "二级调研员",
          "name": "**626,1966-05,湖南临澧,2018-09/2019-06任现级"
        },
        {
          "type": "user",
          "formatname": "**512,1966-07,江西鄱阳,2019-05/2019-06任现级",
          "id": "5371_dyy_二级调研员",
          "person_id": "5371",
          "jgid": "O0000580",
          "job_name": "二级调研员",
          "name": "**512,1966-07,江西鄱阳,2019-05/2019-06任现级"
        },
        {
          "type": "user",
          "formatname": "**81X,1971-02,广东惠来,2017-12/2019-06任现级",
          "id": "986402_dyy_二级调研员",
          "person_id": "986402",
          "jgid": "O0000580",
          "job_name": "二级调研员",
          "name": "**81X,1971-02,广东惠来,2017-12/2019-06任现级"
        },
        {
          "type": "user",
          "formatname": "**757,1967-10,广东五华,2007-09/2022-05任现级",
          "id": "1768_dyy_三级调研员",
          "person_id": "1768",
          "jgid": "O0000580",
          "job_name": "三级调研员",
          "name": "**757,1967-10,广东五华,2007-09/2022-05任现级"
        },
        {
          "type": "user",
          "formatname": "**813,1968-06,浙江乐清,2015-12/2021-07任现级",
          "id": "6249_dyy_三级调研员",
          "person_id": "6249",
          "jgid": "O0000580",
          "job_name": "三级调研员",
          "name": "**813,1968-06,浙江乐清,2015-12/2021-07任现级"
        },
        {
          "type": "user",
          "formatname": "**010,1967-11,湖南临澧,2019-06任现级",
          "id": "3732_dyy_四级调研员",
          "person_id": "3732",
          "jgid": "O0000580",
          "job_name": "四级调研员",
          "name": "**010,1967-11,湖南临澧,2019-06任现级"
        }
      ]
    },
    {
      "sortno": 47,
      "orgname": "财政经济和城建环资工作委员会",
      "level": 1,
      "name": "财政经济和城建环资工作委员会",
      "bzdesc": "1正",
      "formatname": "财政经济和城建环资工作委员会(1正)",
      "id": "O0000035",
      "type": "dept",
      "orgid": "O0000035",
      "parentid": "0",
      "child": []
    },
    {
      "sortno": 48,
      "orgname": "南山街道",
      "level": 1,
      "name": "南山街道",
      "bzdesc": "3正8+1副1六级",
      "formatname": "南山街道(3正8+1副1六级)",
      "id": "O0000600",
      "type": "dept",
      "orgid": "O0000600",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**014,1965-12,广东乳源,2009-09/2020-03任现级",
          "id": "3462_dyy_三级调研员",
          "person_id": "3462",
          "jgid": "O0000600",
          "job_name": "三级调研员",
          "name": "**014,1965-12,广东乳源,2009-09/2020-03任现级"
        },
        {
          "type": "user",
          "formatname": "**234,1963-09,广东普宁,2007-04/2021-02任现级",
          "id": "581_dyy_三级调研员",
          "person_id": "581",
          "jgid": "O0000600",
          "job_name": "三级调研员",
          "name": "**234,1963-09,广东普宁,2007-04/2021-02任现级"
        },
        {
          "type": "user",
          "formatname": "**832,1972-09,广东五华,2019-05/2019-06任现级",
          "id": "2435_dyy_四级调研员",
          "person_id": "2435",
          "jgid": "O0000600",
          "job_name": "四级调研员",
          "name": "**832,1972-09,广东五华,2019-05/2019-06任现级"
        },
        {
          "type": "user",
          "formatname": "**390,1973-12,湖北应城,2022-02任现级",
          "id": "3855152612882380_dyy_四级调研员",
          "person_id": "3855152612882380",
          "jgid": "O0000600",
          "job_name": "四级调研员",
          "name": "**390,1973-12,湖北应城,2022-02任现级"
        }
      ]
    },
    {
      "sortno": 48,
      "orgname": "提案联谊委员会",
      "level": 1,
      "name": "提案联谊委员会",
      "bzdesc": "1正",
      "formatname": "提案联谊委员会(1正)",
      "id": "O0000048",
      "type": "dept",
      "orgid": "O0000048",
      "parentid": "0",
      "child": []
    },
    {
      "sortno": 49,
      "orgname": "教育科学文化卫生和侨务工作委员会",
      "level": 1,
      "name": "教育科学文化卫生和侨务工作委员会",
      "bzdesc": "1正",
      "formatname": "教育科学文化卫生和侨务工作委员会(1正)",
      "id": "O0000036",
      "type": "dept",
      "orgid": "O0000036",
      "parentid": "0",
      "child": []
    },
    {
      "sortno": 49,
      "orgname": "社会委员会",
      "level": 1,
      "name": "社会委员会",
      "bzdesc": "1正",
      "formatname": "社会委员会(1正)",
      "id": "O0000049",
      "type": "dept",
      "orgid": "O0000049",
      "parentid": "0",
      "child": []
    },
    {
      "sortno": 49,
      "orgname": "西丽街道",
      "level": 1,
      "name": "西丽街道",
      "bzdesc": "3正11+1副1六级",
      "formatname": "西丽街道(3正11+1副1六级)",
      "id": "O0000621",
      "type": "dept",
      "orgid": "O0000621",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**817,1977-12,湖南石门,2018-11任现级",
          "id": "986141_dyy_书记",
          "person_id": "986141",
          "jgid": "O0000621",
          "job_name": "书记",
          "name": "**817,1977-12,湖南石门,2018-11任现级"
        },
        {
          "type": "user",
          "formatname": "**013,1964-09,广东紫金,2017-03/2019-06任现级",
          "id": "2268_dyy_二级调研员",
          "person_id": "2268",
          "jgid": "O0000621",
          "job_name": "二级调研员",
          "name": "**013,1964-09,广东紫金,2017-03/2019-06任现级"
        },
        {
          "type": "user",
          "formatname": "**015,1971-11,湖南长沙,2019-05/2019-06任现级",
          "id": "3734_dyy_四级调研员",
          "person_id": "3734",
          "jgid": "O0000621",
          "job_name": "四级调研员",
          "name": "**015,1971-11,湖南长沙,2019-05/2019-06任现级"
        },
        {
          "type": "user",
          "formatname": "**424,1969-05,福建长汀,2012-05/2019-06任现级",
          "id": "2182_dyy_四级调研员",
          "person_id": "2182",
          "jgid": "O0000621",
          "job_name": "四级调研员",
          "name": "**424,1969-05,福建长汀,2012-05/2019-06任现级"
        },
        {
          "type": "user",
          "formatname": "**547,1970-11,湖南永州,2019-01/2019-06任现级",
          "id": "1771_dyy_四级调研员",
          "person_id": "1771",
          "jgid": "O0000621",
          "job_name": "四级调研员",
          "name": "**547,1970-11,湖南永州,2019-01/2019-06任现级"
        },
        {
          "type": "user",
          "formatname": "**018,1964-12,广东揭西,2021-03任现级",
          "id": "1778_dyy_四级调研员",
          "person_id": "1778",
          "jgid": "O0000621",
          "job_name": "四级调研员",
          "name": "**018,1964-12,广东揭西,2021-03任现级"
        },
        {
          "type": "user",
          "formatname": "**37X,1971-07,广东惠来,2021-02任现级",
          "id": "2627_dyy_四级调研员",
          "person_id": "2627",
          "jgid": "O0000621",
          "job_name": "四级调研员",
          "name": "**37X,1971-07,广东惠来,2021-02任现级"
        },
        {
          "type": "user",
          "formatname": "**313,1964-07,广东吴川,2012-05/2019-06任现级",
          "id": "306_dyy_四级调研员",
          "person_id": "306",
          "jgid": "O0000621",
          "job_name": "四级调研员",
          "name": "**313,1964-07,广东吴川,2012-05/2019-06任现级"
        },
        {
          "type": "user",
          "formatname": "**875,1969-08,广东蕉岭,2020-03任现级",
          "id": "2613_dyy_四级调研员",
          "person_id": "2613",
          "jgid": "O0000621",
          "job_name": "四级调研员",
          "name": "**875,1969-08,广东蕉岭,2020-03任现级"
        }
      ]
    },
    {
      "sortno": 50,
      "orgname": "沙河街道",
      "level": 1,
      "name": "沙河街道",
      "bzdesc": "3正8+1副1六级",
      "formatname": "沙河街道(3正8+1副1六级)",
      "id": "O0000641",
      "type": "dept",
      "orgid": "O0000641",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "沙河人1660,1968-11,广东肇庆,2007-09/2021-02任现级",
          "id": "1660_dyy_三级调研员",
          "person_id": "1660",
          "jgid": "O0000641",
          "job_name": "党工委委员、综合治理办公室主任、三级调研员",
          "name": "沙河人1660,1968-11,广东肇庆,2007-09/2021-02任现级"
        },
        {
          "type": "user",
          "formatname": "沙河人88,1974-05,广东龙川,2016-10任现级",
          "id": "88_dyy_其他",
          "person_id": "88",
          "jgid": "O0000641",
          "job_name": "其他",
          "name": "沙河人88,1974-05,广东龙川,2016-10任现级"
        },
        {
          "type": "user",
          "formatname": "沙河人3878,1969-11,海南文昌,2019-06任现级",
          "id": "3878_dyy_二级调研员",
          "person_id": "3878",
          "jgid": "O0000641",
          "job_name": "二级调研员",
          "name": "沙河人3878,1969-11,海南文昌,2019-06任现级"
        },
        {
          "type": "user",
          "formatname": "沙河人5950,1966-08,广东茂名,2019-06任现级",
          "id": "5950_dyy_二级调研员",
          "person_id": "5950",
          "jgid": "O0000641",
          "job_name": "二级调研员",
          "name": "沙河人5950,1966-08,广东茂名,2019-06任现级"
        },
        {
          "type": "user",
          "formatname": "沙河人1954,1965-01,湖北江陵,2013-08/2019-06任现级",
          "id": "1954_dyy_二级调研员",
          "person_id": "1954",
          "jgid": "O0000641",
          "job_name": "二级调研员",
          "name": "沙河人1954,1965-01,湖北江陵,2013-08/2019-06任现级"
        },
        {
          "type": "user",
          "formatname": "沙河人201,1969-04,广东普宁,2007-09/2022-11任现级",
          "id": "201_dyy_三级调研员",
          "person_id": "201",
          "jgid": "O0000641",
          "job_name": "三级调研员",
          "name": "沙河人201,1969-04,广东普宁,2007-09/2022-11任现级"
        },
        {
          "type": "user",
          "formatname": "沙河人5673,1973-10,江西九江,2022-07任现级",
          "id": "5673_dyy_四级调研员",
          "person_id": "5673",
          "jgid": "O0000641",
          "job_name": "四级调研员",
          "name": "沙河人5673,1973-10,江西九江,2022-07任现级"
        },
        {
          "type": "user",
          "formatname": "沙河人1811,1970-10,海南海口,2019-06任现级",
          "id": "1811_dyy_四级调研员",
          "person_id": "1811",
          "jgid": "O0000641",
          "job_name": "四级调研员",
          "name": "沙河人1811,1970-10,海南海口,2019-06任现级"
        }
      ]
    },
    {
      "sortno": 50,
      "orgname": "经济委员会",
      "level": 1,
      "name": "经济委员会",
      "bzdesc": "1正",
      "formatname": "经济委员会(1正)",
      "id": "O0000050",
      "type": "dept",
      "orgid": "O0000050",
      "parentid": "0",
      "child": []
    },
    {
      "sortno": 51,
      "orgname": "蛇口街道",
      "level": 1,
      "name": "蛇口街道",
      "bzdesc": "3正8+1副1六级",
      "formatname": "蛇口街道(3正8+1副1六级)",
      "id": "O0000661",
      "type": "dept",
      "orgid": "O0000661",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**234,1966-10,安徽涡阳,2006-06/2022-11任现级",
          "id": "1026_dyy_三级调研员",
          "person_id": "1026",
          "jgid": "O0000661",
          "job_name": "三级调研员",
          "name": "**234,1966-10,安徽涡阳,2006-06/2022-11任现级"
        },
        {
          "type": "user",
          "formatname": "**347,1979-04,广东吴川,2021-12任现级",
          "id": "2671_dyy_四级调研员",
          "person_id": "2671",
          "jgid": "O0000661",
          "job_name": "四级调研员",
          "name": "**347,1979-04,广东吴川,2021-12任现级"
        }
      ]
    },
    {
      "sortno": 52,
      "orgname": "招商街道",
      "level": 1,
      "name": "招商街道",
      "bzdesc": "3正8+1副1六级",
      "formatname": "招商街道(3正8+1副1六级)",
      "id": "O0000681",
      "type": "dept",
      "orgid": "O0000681",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**013,1974-08,广东深圳,2006-11任现级",
          "id": "1784_dyy_党工委书记",
          "person_id": "1784",
          "jgid": "O0000681",
          "job_name": "党工委书记",
          "name": "**013,1974-08,广东深圳,2006-11任现级"
        },
        {
          "type": "user",
          "formatname": "**530,1972-10,广东揭阳,2010-11/2022-05任现级",
          "id": "2436_dyy_纪工委书记",
          "person_id": "2436",
          "jgid": "O0000681",
          "job_name": "党工委委员、纪工委书记、组长、三级调研员",
          "name": "**530,1972-10,广东揭阳,2010-11/2022-05任现级"
        },
        {
          "type": "user",
          "formatname": "**119,1980-09,广东五华,2021-02任现级",
          "id": "4242_dyy_副主任",
          "person_id": "4242",
          "jgid": "O0000681",
          "job_name": "副主任、应急管理办公室主任",
          "name": "**119,1980-09,广东五华,2021-02任现级"
        },
        {
          "type": "user",
          "formatname": "**02X,1975-08,江西修水,2012-05任现级",
          "id": "1512_dyy_副主任",
          "person_id": "1512",
          "jgid": "O0000681",
          "job_name": "副主任、综合治理办公室主任",
          "name": "**02X,1975-08,江西修水,2012-05任现级"
        },
        {
          "type": "user",
          "formatname": "**966,1964-04,广东普宁,2012-02/2020-12任现级",
          "id": "1763_dyy_一级调研员",
          "person_id": "1763",
          "jgid": "O0000681",
          "job_name": "一级调研员",
          "name": "**966,1964-04,广东普宁,2012-02/2020-12任现级"
        },
        {
          "type": "user",
          "formatname": "**016,1969-09,广东龙川,2019-06任现级",
          "id": "986239_dyy_二级调研员",
          "person_id": "986239",
          "jgid": "O0000681",
          "job_name": "二级调研员",
          "name": "**016,1969-09,广东龙川,2019-06任现级"
        },
        {
          "type": "user",
          "formatname": "**691,1975-10,河南唐河,2022-05任现级",
          "id": "4840_dyy_四级调研员",
          "person_id": "4840",
          "jgid": "O0000681",
          "job_name": "四级调研员",
          "name": "**691,1975-10,河南唐河,2022-05任现级"
        },
        {
          "type": "user",
          "formatname": "**234,1965-10,广东紫金,2019-01/2019-06任现级",
          "id": "4514_dyy_四级调研员",
          "person_id": "4514",
          "jgid": "O0000681",
          "job_name": "四级调研员",
          "name": "**234,1965-10,广东紫金,2019-01/2019-06任现级"
        },
        {
          "type": "user",
          "formatname": "**234,1968-05,湖北武汉,2018-09/2022-05任现级",
          "id": "629_dyy_四级调研员",
          "person_id": "629",
          "jgid": "O0000681",
          "job_name": "四级调研员",
          "name": "**234,1968-05,湖北武汉,2018-09/2022-05任现级"
        },
        {
          "type": "user",
          "formatname": "**311,1970-09,湖南湘潭,2021-02任现级",
          "id": "2208_dyy_四级调研员",
          "person_id": "2208",
          "jgid": "O0000681",
          "job_name": "四级调研员",
          "name": "**311,1970-09,湖南湘潭,2021-02任现级"
        }
      ]
    },
    {
      "sortno": 53,
      "orgname": "粤海街道",
      "level": 1,
      "name": "粤海街道",
      "bzdesc": "3正8+1副1六级",
      "formatname": "粤海街道(3正8+1副1六级)",
      "id": "O0000702",
      "type": "dept",
      "orgid": "O0000702",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**014,1971-10,广东高州,2012-04/2020-04任现级",
          "id": "460_dyy_部长",
          "person_id": "460",
          "jgid": "O0000702",
          "job_name": "党工委委员、部长、企业服务办公室主任、三级调研员",
          "name": "**014,1971-10,广东高州,2012-04/2020-04任现级"
        },
        {
          "type": "user",
          "formatname": "**234,1966-08,广东化州,2022-11任现级",
          "id": "2418_dyy_二级调研员",
          "person_id": "2418",
          "jgid": "O0000702",
          "job_name": "二级调研员",
          "name": "**234,1966-08,广东化州,2022-11任现级"
        },
        {
          "type": "user",
          "formatname": "**234,1963-10,北京,2018-09/2022-11任现级",
          "id": "758_dyy_二级调研员",
          "person_id": "758",
          "jgid": "O0000702",
          "job_name": "二级调研员",
          "name": "**234,1963-10,北京,2018-09/2022-11任现级"
        },
        {
          "type": "user",
          "formatname": "**81X,1970-07,湖南娄底,2019-06任现级",
          "id": "986238_dyy_二级调研员",
          "person_id": "986238",
          "jgid": "O0000702",
          "job_name": "二级调研员",
          "name": "**81X,1970-07,湖南娄底,2019-06任现级"
        },
        {
          "type": "user",
          "formatname": "**10X,1966-10,江苏常州,2019-06任现级",
          "id": "1812_dyy_四级调研员",
          "person_id": "1812",
          "jgid": "O0000702",
          "job_name": "四级调研员",
          "name": "**10X,1966-10,江苏常州,2019-06任现级"
        },
        {
          "type": "user",
          "formatname": "**036,1972-09,湖北武穴,2019-06任现级",
          "id": "3839_dyy_四级调研员",
          "person_id": "3839",
          "jgid": "O0000702",
          "job_name": "四级调研员",
          "name": "**036,1972-09,湖北武穴,2019-06任现级"
        }
      ]
    },
    {
      "sortno": 54,
      "orgname": "桃源街道",
      "level": 1,
      "name": "桃源街道",
      "bzdesc": "3正8+1副1六级",
      "formatname": "桃源街道(3正8+1副1六级)",
      "id": "O0000722",
      "type": "dept",
      "orgid": "O0000722",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**570,1968-04,重庆,2016-11任现级",
          "id": "5488_dyy_主任",
          "person_id": "5488",
          "jgid": "O0000722",
          "job_name": "党工委副书记、主任",
          "name": "**570,1968-04,重庆,2016-11任现级"
        },
        {
          "type": "user",
          "formatname": "**541,1965-11,广东揭阳,2006-04/2019-12任现级",
          "id": "2305_dyy_一级调研员",
          "person_id": "2305",
          "jgid": "O0000722",
          "job_name": "一级调研员",
          "name": "**541,1965-11,广东揭阳,2006-04/2019-12任现级"
        },
        {
          "type": "user",
          "formatname": "**899,1972-09,福建南安,2019-06任现级",
          "id": "986538_dyy_二级调研员",
          "person_id": "986538",
          "jgid": "O0000722",
          "job_name": "二级调研员",
          "name": "**899,1972-09,福建南安,2019-06任现级"
        },
        {
          "type": "user",
          "formatname": "**234,1971-09,湖南新化,2019-05/2019-06任现级",
          "id": "2882_dyy_二级调研员",
          "person_id": "2882",
          "jgid": "O0000722",
          "job_name": "二级调研员",
          "name": "**234,1971-09,湖南新化,2019-05/2019-06任现级"
        },
        {
          "type": "user",
          "formatname": "**536,1965-08,广东五华,2016-08/2019-06任现级",
          "id": "1130_dyy_二级调研员",
          "person_id": "1130",
          "jgid": "O0000722",
          "job_name": "二级调研员",
          "name": "**536,1965-08,广东五华,2016-08/2019-06任现级"
        },
        {
          "type": "user",
          "formatname": "**816,1973-04,湖南新化,2019-06任现级",
          "id": "986536_dyy_二级调研员",
          "person_id": "986536",
          "jgid": "O0000722",
          "job_name": "二级调研员",
          "name": "**816,1973-04,湖南新化,2019-06任现级"
        },
        {
          "type": "user",
          "formatname": "**234,1964-12,江西南昌,2007-09/2020-03任现级",
          "id": "1658_dyy_三级调研员",
          "person_id": "1658",
          "jgid": "O0000722",
          "job_name": "三级调研员",
          "name": "**234,1964-12,江西南昌,2007-09/2020-03任现级"
        }
      ]
    },
    {
      "sortno": 55,
      "orgname": "区属国企",
      "level": 1,
      "name": "区属国企",
      "bzdesc": "",
      "formatname": "区属国企",
      "id": "O1001155",
      "type": "dept",
      "orgid": "O1001155",
      "parentid": "0",
      "child": []
    },
    {
      "sortno": 753,
      "orgname": "法院",
      "level": 1,
      "name": "法院",
      "bzdesc": "",
      "formatname": "法院",
      "id": "O0000753",
      "type": "dept",
      "orgid": "O0000753",
      "parentid": "0",
      "child": []
    },
    {
      "sortno": 998,
      "orgname": "测试流程单位",
      "level": 1,
      "name": "测试流程单位",
      "bzdesc": "",
      "formatname": "测试流程单位",
      "id": "ab8a94383eb243e4ba499b4a19207251",
      "type": "dept",
      "orgid": "ab8a94383eb243e4ba499b4a19207251",
      "parentid": "0",
      "child": []
    },
    {
      "sortno": 11101,
      "orgname": "区委办（区政府办）",
      "level": 1,
      "name": "区委办（区政府办）",
      "bzdesc": "1正4+1副2五级2六级",
      "formatname": "区委办（区政府办）(1正4+1副2五级2六级)",
      "id": "O0000010",
      "type": "dept",
      "orgid": "O0000010",
      "parentid": "0",
      "child": [
        {
          "type": "user",
          "formatname": "**076,1982-03,广东普宁,2022-03任现级",
          "id": "91a94398f6e84602b08a58106a6a61f6_0",
          "person_id": "5586",
          "jgid": "O0000010",
          "job_name": "局长",
          "name": "**076,1982-03,广东普宁,2022-03任现级"
        },
        {
          "type": "user",
          "formatname": "【空缺】局长",
          "id": "91a94398f6e84602b08a58106a6a61f6_1",
          "person_id": null,
          "jgid": "O0000010",
          "job_name": "局长",
          "name": "【空缺】局长"
        }
      ]
    }
  ]
});

const props = {
  id: 'id',
  label: function (data) {
    let name = data.name;
    if (data.job_name) {
      name = `${data.job_name}：${data.name}”`
    }
    if (data.bzdesc) {
      name += `\n(${data.bzdesc})`
    }

    return name;
  },
  children: "child"
}

const mindmapName = "思维导图"

</script>
<style lang='scss'></style>
