(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{592:function(_,v,l){_.exports=l.p+"assets/img/image-20220613113848759.5e99a40d.png"},662:function(_,v,l){"use strict";l.r(v);var e=l(0),d=Object(e.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"关系数据理论"}},[_._v("关系数据理论")]),_._v(" "),v("blockquote",[v("p",[_._v("如何设计好的关系模式使得数据库的使用效率更高")])]),_._v(" "),v("h3",{attrs:{id:"问题提出"}},[_._v("问题提出")]),_._v(" "),v("p",[_._v("怎样判断数据库好坏：用范式衡量")]),_._v(" "),v("p",[_._v("关系模式由五部分构成："),v("code",[_._v("R(U, D, DOM, F)")])]),_._v(" "),v("ul",[v("li",[_._v("R：关系名")]),_._v(" "),v("li",[_._v("U：属性名集合")]),_._v(" "),v("li",[_._v("D：属性的域")]),_._v(" "),v("li",[_._v("DOM：属性向域的映象集合")]),_._v(" "),v("li",[_._v("F：属性间数据的函数依赖")]),_._v(" "),v("li",[_._v("其中"),v("code",[_._v("D,DOM")]),_._v("和关系模式设计关系不大，于是我们也视作三元组"),v("code",[_._v("R(U, F)")])])]),_._v(" "),v("p",[_._v("数据依赖：完整性约束的表现")]),_._v(" "),v("ul",[v("li",[_._v("函数依赖（"),v("code",[_._v("FD")]),_._v("）")]),_._v(" "),v("li",[_._v("多值依赖（"),v("code",[_._v("MVD")]),_._v("）")])]),_._v(" "),v("p",[_._v("试想这样一个数据库：一个学校的教务管理系统，只有一个表，"),v("code",[_._v("Student(sno, sdept, mname, cno, grade)")]),_._v("，分别为学号、系、系主任、课程号、成绩")]),_._v(" "),v("p",[_._v("这个关系模式存在的问题：")]),_._v(" "),v("ul",[v("li",[_._v("数据冗余太大：系主任一个系只有一个，系中每条数据都加这个人的名字")]),_._v(" "),v("li",[_._v("更新异常（Update Anomalies）：更换系主任后，系中每条数据都要改")]),_._v(" "),v("li",[_._v("插入异常（Insertion Anomalies）：一个系刚成立没有学生，无法插入系主任的数据")]),_._v(" "),v("li",[_._v("删除异常（Deletion Anomalies）：学生全毕业了，系主任的数据会随之丢失")])]),_._v(" "),v("p",[_._v("将这个表分成三个表")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("S(sno, sdept), sno -> sdept")])]),_._v(" "),v("li",[v("code",[_._v("SC(sno, cno, grade), sno,cno -> grade")])]),_._v(" "),v("li",[v("code",[_._v("Dept(sdept, mname), sdept -> mname")])])]),_._v(" "),v("p",[_._v("解决了上述四个问题且数据完整没有任何丢失")]),_._v(" "),v("h3",{attrs:{id:"规范化"}},[_._v("规范化")]),_._v(" "),v("p",[_._v("规范化理论用于指导改造关系模式，通过分解关系模式来消除不合适的数据依赖，以解决插入异常、删除异常、更新异常和数据冗余问题")]),_._v(" "),v("h4",{attrs:{id:"函数依赖"}},[_._v("函数依赖")]),_._v(" "),v("p",[_._v("设有关系模式"),v("code",[_._v("R")]),_._v("，"),v("code",[_._v("U")]),_._v("为其属性集，"),v("code",[_._v("X,Y∈U")]),_._v("，"),v("code",[_._v("X")]),_._v("的取值唯一（在表中只出现一次），且只对应一个"),v("code",[_._v("Y")]),_._v("，那么我们说"),v("code",[_._v("X")]),_._v("函数确定"),v("code",[_._v("Y")]),_._v("，或"),v("code",[_._v("Y")]),_._v("函数依赖于"),v("code",[_._v("X")]),_._v("，记作"),v("code",[_._v("X->Y")])]),_._v(" "),v("ul",[v("li",[_._v("不同的"),v("code",[_._v("X")]),_._v("可以对应相同的"),v("code",[_._v("Y")])]),_._v(" "),v("li",[v("code",[_._v("X,Y")]),_._v("可以是多个属性，也可以是单个属性")])]),_._v(" "),v("p",[_._v("平凡依赖：若"),v("code",[_._v("X->Y, Y∈X")]),_._v("，称其为平凡依赖")]),_._v(" "),v("p",[_._v("非平凡依赖：即"),v("code",[_._v("X->Y, Y!∈X")])]),_._v(" "),v("p",[_._v("完全依赖：若"),v("code",[_._v("X->Y")]),_._v("，且"),v("code",[_._v("Y")]),_._v("不依赖于"),v("code",[_._v("X")]),_._v("的任一子集，则成为完全依赖")]),_._v(" "),v("p",[_._v("部分依赖：与完全依赖相反，即"),v("code",[_._v("X->Y")]),_._v("，"),v("code",[_._v("X")]),_._v("的某一子集也可以决定"),v("code",[_._v("Y")])]),_._v(" "),v("p",[_._v("传递函数依赖："),v("code",[_._v("X->Y, Y!∈X, Y->Z, Z!∈Y")]),_._v("，则称"),v("code",[_._v("Z")]),_._v("传递依赖于"),v("code",[_._v("X")]),_._v("，记作"),v("code",[_._v("X->Z(传递)")])]),_._v(" "),v("h4",{attrs:{id:"码"}},[_._v("码")]),_._v(" "),v("blockquote",[v("p",[_._v("码：key")])]),_._v(" "),v("p",[_._v("候选码：可以决定关系中全部属性的一组码（可单可多）")]),_._v(" "),v("p",[_._v("主码：选定候选码中某个码为主码")]),_._v(" "),v("p",[_._v("主属性：候选码中的属性")]),_._v(" "),v("p",[_._v("非主属性：非候选码中的属性")]),_._v(" "),v("p",[_._v("全码：码为整个属性组，称为全码")]),_._v(" "),v("p",[_._v("外码：不为当前关系的候选码，但是是其他关系的码")]),_._v(" "),v("h4",{attrs:{id:"范式"}},[_._v("范式")]),_._v(" "),v("ul",[v("li",[_._v("第一范式")]),_._v(" "),v("li",[_._v("第二范式")]),_._v(" "),v("li",[_._v("第三范式")]),_._v(" "),v("li",[_._v("BC范式")]),_._v(" "),v("li",[_._v("第四范式")]),_._v(" "),v("li",[_._v("第五范式")])]),_._v(" "),v("p",[_._v("低级范式的关系模式可以转化为若干个高一级的关系模式，这个过程就叫做规范化")]),_._v(" "),v("p",[v("code",[_._v("1NF")]),_._v("：第一范式，关系模式R中每个属性都是"),v("strong",[_._v("不可再分")]),_._v("的基本数据项，如不能连续存语数英三门成绩（9165110）")]),_._v(" "),v("ul",[v("li",[_._v("不满足"),v("code",[_._v("1NF")]),_._v("不能称为关系数据库")])]),_._v(" "),v("h4",{attrs:{id:"_2nf"}},[_._v("2NF")]),_._v(" "),v("p",[_._v("消除部分依赖")]),_._v(" "),v("p",[v("code",[_._v("2NF")]),_._v("：若"),v("code",[_._v("R")]),_._v("满足"),v("code",[_._v("1NF")]),_._v("，且"),v("strong",[_._v("每个非主属性都完全依赖于候选码")]),_._v("，则"),v("code",[_._v("R∈2NF")])]),_._v(" "),v("ul",[v("li",[v("p",[_._v("这意味着非主属性必须完全依赖于码，不可以部分依赖")]),_._v(" "),v("p",[_._v("如果说某个非主属性依赖于主码但不依赖于某个主属性（候选码多于一个），那么这个关系模式不符合"),v("code",[_._v("2NF")])])]),_._v(" "),v("li",[v("p",[_._v("注意非主属性可以依赖于非主属性")]),_._v(" "),v("p",[_._v("如"),v("code",[_._v("系教学楼")]),_._v("可以依赖于"),v("code",[_._v("系")]),_._v("，但系是非主属性，依赖于"),v("code",[_._v("学号")])])])]),_._v(" "),v("p",[_._v("举个栗子："),v("code",[_._v("S-L-C(Sno, Sdept, Sloc, Cno, Grade)")])]),_._v(" "),v("p",[_._v("其中，"),v("code",[_._v("Sno学号, Cno课程号")]),_._v("和为码，可以决定"),v("code",[_._v("Sdept系, Sloc系教学楼, grade成绩")]),_._v("，很明显，"),v("code",[_._v("学号")]),_._v("可以直接决定"),v("code",[_._v("系、系教学楼")]),_._v("，不需要"),v("code",[_._v("课程号")]),_._v("参与")]),_._v(" "),v("ul",[v("li",[_._v("即"),v("code",[_._v("系、系教学楼")]),_._v("部分依赖于码")])]),_._v(" "),v("p",[_._v("这样会造成如下问题：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("插入异常")]),_._v(" "),v("p",[_._v("如果插入一个新学生，但该生未选课，即该生无Cno，由于插入元组时，必须给定码值，因此插入失败")])]),_._v(" "),v("li",[v("p",[_._v("删除异常")]),_._v(" "),v("p",[_._v("如果S4只选了一门课C3，现在他不再选这门课，则删除C3后，整个元组的其他信息也被删除了")])]),_._v(" "),v("li",[v("p",[_._v("数据冗余度大 （k门课，"),v("code",[_._v("Sdept Sloc")]),_._v("重复存储k次）")])]),_._v(" "),v("li",[v("p",[_._v("修改复杂")]),_._v(" "),v("p",[_._v("如果一个学生选了多门课，则"),v("code",[_._v("Sdept，Sloc")]),_._v("被存储了多次。如果该生转系，则需要修改所有相关的"),v("code",[_._v("Sdept")]),_._v("和"),v("code",[_._v("Sloc")]),_._v("，造成修改的复杂化")])])]),_._v(" "),v("p",[_._v("解决方法：将"),v("code",[_._v("S-C-L")]),_._v("拆分为两张表")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("SC(Sno,Cno,Grade)")])]),_._v(" "),v("li",[v("code",[_._v("S-L(Sno,Sdept,Sloc)")])])]),_._v(" "),v("h4",{attrs:{id:"_3nf"}},[_._v("3NF")]),_._v(" "),v("p",[_._v("消除非主属性对主属性的传递依赖")]),_._v(" "),v("p",[v("code",[_._v("3NF")]),_._v("：在"),v("code",[_._v("2NF")]),_._v("的基础山，"),v("strong",[_._v("非主属性不依赖于任一非主属性")]),_._v("，那么该关系模式满足"),v("code",[_._v("3NF")])]),_._v(" "),v("ul",[v("li",[_._v("可以从传递依赖的方面来理解，如"),v("code",[_._v("学号->系")]),_._v("，"),v("code",[_._v("系->系教学楼")]),_._v("，其中"),v("code",[_._v("系")]),_._v("是一个非主属性，在码"),v("code",[_._v("学号")]),_._v("和非主属性"),v("code",[_._v("系教学楼")]),_._v("之间存在非主属性"),v("code",[_._v("系")]),_._v("连接的传递依赖，那么我们就说这个关系模式不满足"),v("code",[_._v("3NF")])])]),_._v(" "),v("p",[_._v("举个例子"),v("code",[_._v("S-L(Sno,Sdept,Sloc)")])]),_._v(" "),v("p",[_._v("解决方法：将"),v("code",[_._v("S-L")]),_._v("拆分为两张表")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("S-D(Sno, Sdept)")])]),_._v(" "),v("li",[v("code",[_._v("S-L(Sdept, Sloc)")])])]),_._v(" "),v("h4",{attrs:{id:"bcnf"}},[_._v("BCNF")]),_._v(" "),v("p",[v("code",[_._v("Boyce-Codd")]),_._v("巴斯科德范式，通常被认为是修正的第三范式")]),_._v(" "),v("ul",[v("li",[_._v("所有非主属性都完全依赖于每个候选码"),v("code",[_._v("(2NF)")])]),_._v(" "),v("li",[_._v("没有任何属性完全依赖于非码的任何一组属性"),v("code",[_._v("(3NF)")])]),_._v(" "),v("li",[_._v("所有主属性都完全依赖于每个不包含它的候选码"),v("code",[_._v("(BCNF)")])])]),_._v(" "),v("p",[_._v("进一步规范了主属性的依赖")]),_._v(" "),v("p",[_._v("注意：满足BC范式一定满足第三范式，反之不然")]),_._v(" "),v("h4",{attrs:{id:"多值依赖"}},[_._v("多值依赖")]),_._v(" "),v("p",[_._v("将关系模式的属性集"),v("code",[_._v("U")]),_._v("分为三个部分"),v("code",[_._v("X,Y,Z")]),_._v("，其中"),v("code",[_._v("Z=U-X-Y")])]),_._v(" "),v("p",[_._v("若一对"),v("code",[_._v("(x,y)")]),_._v("值对应一组"),v("code",[_._v("Z")]),_._v("值，但"),v("code",[_._v("z")]),_._v("实际上只取决于"),v("code",[_._v("x")]),_._v("，而无关"),v("code",[_._v("y")]),_._v("，这时我们称"),v("code",[_._v("Z")]),_._v("多值依赖于"),v("code",[_._v("X")])]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("学科X")]),_._v(" "),v("th",[_._v("教师Y")]),_._v(" "),v("th",[_._v("参考书Z")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("数学")]),_._v(" "),v("td",[_._v("邓军")]),_._v(" "),v("td",[_._v("数分")])]),_._v(" "),v("tr",[v("td",[_._v("数学")]),_._v(" "),v("td",[_._v("邓军")]),_._v(" "),v("td",[_._v("高代")])]),_._v(" "),v("tr",[v("td",[_._v("数学")]),_._v(" "),v("td",[_._v("邓军")]),_._v(" "),v("td",[_._v("微分")])])])]),_._v(" "),v("ul",[v("li",[_._v("如上述关系中，候选码为全码，满足"),v("code",[_._v("3NF")]),_._v("，一组"),v("code",[_._v("X,Y")]),_._v("决定一个"),v("code",[_._v("Z")]),_._v("，但实际上"),v("code",[_._v("Z")]),_._v("只取决于"),v("code",[_._v("X")])])]),_._v(" "),v("p",[_._v("可将上表分为")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("学科X")]),_._v(" "),v("th",[_._v("教师Y")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("数学")]),_._v(" "),v("td",[_._v("邓军")])])])]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("学科X")]),_._v(" "),v("th",[_._v("参考书")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("数学")]),_._v(" "),v("td",[_._v("数分")])]),_._v(" "),v("tr",[v("td",[_._v("数学")]),_._v(" "),v("td",[_._v("高代")])]),_._v(" "),v("tr",[v("td",[_._v("数学")]),_._v(" "),v("td",[_._v("微分")])])])]),_._v(" "),v("ul",[v("li",[_._v("两个表的候选码依旧为全码，分别均满足"),v("code",[_._v("3NF")]),_._v("，未拆分前存在多值依赖")])]),_._v(" "),v("p",[_._v("平凡多值依赖：若"),v("code",[_._v("X--\x3eZ")]),_._v("且"),v("code",[_._v("Y")]),_._v("为空集，则称"),v("code",[_._v("Z")]),_._v("平凡多值依赖于"),v("code",[_._v("X")])]),_._v(" "),v("p",[_._v("非平凡多值依赖：即"),v("code",[_._v("Y")]),_._v("不为空集")]),_._v(" "),v("p",[_._v("多值依赖的性质：")]),_._v(" "),v("ul",[v("li",[_._v("对称性：若"),v("code",[_._v("x--\x3eZ")]),_._v("，则必有"),v("code",[_._v("X--\x3eY")])]),_._v(" "),v("li",[_._v("函数依赖是多值依赖的特殊情况\n"),v("ul",[v("li",[_._v("函数依赖"),v("code",[_._v("X->Y")]),_._v("："),v("code",[_._v("X")]),_._v("具有唯一性，一个"),v("code",[_._v("X")]),_._v("只对应一个"),v("code",[_._v("Y")])]),_._v(" "),v("li",[_._v("多值依赖"),v("code",[_._v("X--\x3eZ")]),_._v("："),v("code",[_._v("(X,Y)")]),_._v("不具有唯一性，对应多个"),v("code",[_._v("Z")])])])]),_._v(" "),v("li",[_._v("若"),v("code",[_._v("X--\x3eY")]),_._v("，"),v("code",[_._v("X--\x3eZ")]),_._v("，则"),v("code",[_._v("X--\x3eY∪Z, X--\x3eY∩Z, X--\x3eY-Z, X--\x3eZ-Y")])]),_._v(" "),v("li",[_._v("传递性：若"),v("code",[_._v("X--\x3eY, Y--\x3eZ")]),_._v("， 则"),v("code",[_._v("X--\x3eZ–Y")])])]),_._v(" "),v("h4",{attrs:{id:"_4nf"}},[_._v("4NF")]),_._v(" "),v("p",[_._v("要求关系模式中所有的非平凡多值依赖均满足："),v("code",[_._v("X")]),_._v("中均含有码")]),_._v(" "),v("p",[_._v("翻译成人话就是")]),_._v(" "),v("ul",[v("li",[_._v("限制了关系模式中的多值依赖，不允许出现非平凡且非函数依赖的多值依赖")]),_._v(" "),v("li",[_._v("即要求关系模式中只准有函数依赖，不准有多值依赖")]),_._v(" "),v("li",[_._v("平凡多值依赖就是TM的函数依赖")])]),_._v(" "),v("h3",{attrs:{id:"数据依赖的公理系统"}},[_._v("数据依赖的公理系统")]),_._v(" "),v("blockquote",[v("p",[_._v("Armstrong公理系统")])]),_._v(" "),v("p",[_._v("模式分解算法的理论基础：Armstrong公理系统")]),_._v(" "),v("ul",[v("li",[_._v("尽可能少的函数依赖描述出实际需求")])]),_._v(" "),v("p",[_._v("逻辑蕴含：若F是关系模式R的函数依赖，若在R中，Y函数依赖于X，即"),v("code",[_._v("X->Y")]),_._v("，则称F逻辑蕴含"),v("code",[_._v("X->Y")])]),_._v(" "),v("p",[_._v("Armstrong公理：")]),_._v(" "),v("ul",[v("li",[_._v("自反律：若"),v("code",[_._v("Y包含于X包含于U")]),_._v("，则"),v("code",[_._v("X->Y")]),_._v("为"),v("code",[_._v("F")]),_._v("所蕴含")]),_._v(" "),v("li",[_._v("增广律："),v("code",[_._v("X->Y")]),_._v("被"),v("code",[_._v("F")]),_._v("蕴含，则"),v("code",[_._v("XZ->YZ")]),_._v("同样被"),v("code",[_._v("F")]),_._v("蕴含")]),_._v(" "),v("li",[_._v("传递律：若"),v("code",[_._v("X->Y,Y->Z")]),_._v("被"),v("code",[_._v("F")]),_._v("蕴含，则"),v("code",[_._v("X->Z")]),_._v("被"),v("code",[_._v("F")]),_._v("蕴含")])]),_._v(" "),v("p",[_._v("根据上述公理可以导出规则：")]),_._v(" "),v("ul",[v("li",[_._v("合并规则：若"),v("code",[_._v("X->Y,X->Z")]),_._v("，则"),v("code",[_._v("X->YZ")])]),_._v(" "),v("li",[_._v("伪传递规则：若"),v("code",[_._v("X->Y,WY->Z")]),_._v("，则"),v("code",[_._v("XW->Z")])]),_._v(" "),v("li",[_._v("分解规则：若"),v("code",[_._v("X->Y,Z包含于Y")]),_._v("，则"),v("code",[_._v("X->Z")])])]),_._v(" "),v("p",[_._v("函数依赖闭包：")]),_._v(" "),v("img",{attrs:{src:l(592)}}),_._v(" "),v("p",[v("code",[_._v("X")]),_._v("关于函数依赖集"),v("code",[_._v("F")]),_._v("的闭包"),v("code",[_._v("X+")]),_._v("：")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("XF+ ={A|X→A能由F根据Armstrong公理导出}")])])]),_._v(" "),v("p",[_._v("在"),v("code",[_._v("F")]),_._v("中，若"),v("code",[_._v("X->Y")]),_._v("能根据公理推出，那么"),v("code",[_._v("Y一定被包含于XF+")])]),_._v(" "),v("ul",[v("li",[_._v("于是判断"),v("code",[_._v("X->Y")]),_._v("是否能导出变成判定"),v("code",[_._v("Y")]),_._v("是否是"),v("code",[_._v("XF+")]),_._v("子集的问题")])]),_._v(" "),v("p",[_._v("Armstrong公理是有效且完备的")]),_._v(" "),v("p",[_._v("函数依赖集等价：当"),v("code",[_._v("G+=F+")]),_._v("，则称函数依赖集"),v("code",[_._v("F")]),_._v("于"),v("code",[_._v("G")]),_._v("等价")]),_._v(" "),v("p",[_._v("最小依赖集：")]),_._v(" "),v("ul",[v("li",[_._v("F中任一函数依赖的右部仅含有一个属性")]),_._v(" "),v("li",[_._v("F中不存在这样的函数依赖X→A，使得F与F-{X→A}等价 (没有多余的函数依赖)")]),_._v(" "),v("li",[_._v("F中不存在这样的函数依赖X→A， X有真子集Z使得F-{X→A}∪{Z→A}与F等价 (决定因素里没有多余的属性)")]),_._v(" "),v("li",[_._v("目的：用最少的描述反应实际中事物间的关系从而便于分解")])]),_._v(" "),v("p",[_._v("极小化过程：即把依赖集"),v("code",[_._v("F")]),_._v("化为其等价的最小依赖集"),v("code",[_._v("Fm")])]),_._v(" "),v("h3",{attrs:{id:"模式分解"}},[_._v("模式分解")]),_._v(" "),v("p",[_._v("模式分解")]),_._v(" "),v("p",[_._v("矩阵法")]),_._v(" "),v("ul",[v("li",[_._v("极小化处理")]),_._v(" "),v("li",[_._v("去重取并")])]),_._v(" "),v("p",[_._v("分解法")]),_._v(" "),v("p",[_._v("关系一定有码")]),_._v(" "),v("p",[_._v("任何一个二元关系都是3NF、BCNF、4NF")]),_._v(" "),v("p",[_._v("最小函数依赖集算法")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("右部单属性")]),_._v(" "),v("p",[_._v("H->IK，分解为H->I, H->K")])]),_._v(" "),v("li",[v("p",[_._v("无多余依赖")]),_._v(" "),v("p",[_._v("H->J, J->K, K->I, H->I，那么H->I就是多余的")])]),_._v(" "),v("li",[v("p",[_._v("左部无多属性")]),_._v(" "),v("p",[_._v("IJK->L, I->K，那么可以简化为IJ->L, I->K")])])]),_._v(" "),v("p",[_._v("候选码求解算法")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("L类属性：只出现在函数依赖左部的属性")])]),_._v(" "),v("li",[v("p",[_._v("R类属性：只出现在函数依赖右部的属性")])]),_._v(" "),v("li",[v("p",[_._v("LR类属性：同时出现在函数依赖左右部的属性")])]),_._v(" "),v("li",[v("p",[_._v("N类属性：不在F中的函数依赖中出现的属性")])])]),_._v(" "),v("p",[_._v("有以下结论")]),_._v(" "),v("ul",[v("li",[_._v("L类属性和N类属性必包含于任一候选码中")]),_._v(" "),v("li",[_._v("R类属性必不包含于任何候选码中")]),_._v(" "),v("li",[_._v("LR类属性不能确定是否在码中")])]),_._v(" "),v("p",[_._v("算法：对码分类")]),_._v(" "),v("h2",{attrs:{id:"数据库设计方法和步骤"}},[_._v("数据库设计方法和步骤")]),_._v(" "),v("blockquote",[v("p",[_._v("各阶段目标及注意事项")])]),_._v(" "),v("h3",{attrs:{id:"概述"}},[_._v("概述")]),_._v(" "),v("p",[_._v("为用户和各种应用系统提供一个信息基础设施和高效率的运行环境(存取效率、存储空间利用率运行管理效率)")]),_._v(" "),v("p",[_._v("特点：")]),_._v(" "),v("ul",[v("li",[_._v("基本规律：三分技术，七分管理，十二分基础数据")]),_._v(" "),v("li",[_._v("结构（数据）设计和行为（处理）设计相结合")])]),_._v(" "),v("p",[_._v("设计方法：")]),_._v(" "),v("ul",[v("li",[_._v("手工试凑方法")]),_._v(" "),v("li",[_._v("规范设计法\n"),v("ul",[v("li",[_._v("新奥尔良方法")]),_._v(" "),v("li",[_._v("基于"),v("code",[_._v("E-R")]),_._v("模型的数据库设计方法")]),_._v(" "),v("li",[v("code",[_._v("3NF")]),_._v("的设计方法")]),_._v(" "),v("li",[_._v("面向对象的数据库设计方法")]),_._v(" "),v("li",[_._v("统一建模语言"),v("code",[_._v("(UML)")]),_._v("方法")])])])]),_._v(" "),v("p",[_._v("数据库设计准备工作：确立系统分析人员、数据库设计人员；用户和数据库管理员；应用开发人员")]),_._v(" "),v("p",[_._v("数据库设计的六个过程：")]),_._v(" "),v("ul",[v("li",[_._v("需求分析")]),_._v(" "),v("li",[_._v("概念结构设计")]),_._v(" "),v("li",[_._v("逻辑结构设计")]),_._v(" "),v("li",[_._v("物理结构设计")]),_._v(" "),v("li",[_._v("数据库实施")]),_._v(" "),v("li",[_._v("数据库运行和维护")])]),_._v(" "),v("h3",{attrs:{id:"需求分析"}},[_._v("需求分析")]),_._v(" "),v("p",[_._v("任务：")]),_._v(" "),v("ul",[v("li",[_._v("调查显示世界要处理的对象")]),_._v(" "),v("li",[_._v("了解原系统")]),_._v(" "),v("li",[_._v("明确用户各种需求")]),_._v(" "),v("li",[_._v("确定新系统功能")]),_._v(" "),v("li",[_._v("充分考虑今后可能的扩充和改变")])]),_._v(" "),v("p",[_._v("需求分析方法：")]),_._v(" "),v("ul",[v("li",[_._v("调查并分析实际需求\n"),v("ul",[v("li",[_._v("常用调查方法：\n"),v("ul",[v("li",[_._v("跟班作业")]),_._v(" "),v("li",[_._v("开调查会")]),_._v(" "),v("li",[_._v("请专人介绍")]),_._v(" "),v("li",[_._v("询问")]),_._v(" "),v("li",[_._v("用调查表进行用户调研")]),_._v(" "),v("li",[_._v("查阅记录")])])]),_._v(" "),v("li",[_._v("结构化分析方法：\n"),v("ul",[v("li",[_._v("从最上层的系统组织机构入手")]),_._v(" "),v("li",[_._v("自顶向下、逐层分解分析系统")])])])])]),_._v(" "),v("li",[_._v("与用户达成共识")]),_._v(" "),v("li",[_._v("分析和表达这些需求")])]),_._v(" "),v("p",[_._v("数据字典：关于数据库中数据的描述，即元数据，是数据分析所获得的主要结果")]),_._v(" "),v("p",[_._v("数据字典的内容：")]),_._v(" "),v("ul",[v("li",[_._v("数据项")]),_._v(" "),v("li",[_._v("数据结构")]),_._v(" "),v("li",[_._v("数据流")]),_._v(" "),v("li",[_._v("数据存储")]),_._v(" "),v("li",[_._v("处理过程")])]),_._v(" "),v("h3",{attrs:{id:"概念结构设计"}},[_._v("概念结构设计")]),_._v(" "),v("p",[_._v("什么是概念结构设计？")]),_._v(" "),v("ul",[v("li",[_._v("将需求分析得到的用户需求抽象为信息结构即概念模型的过程就是概念结构设计")]),_._v(" "),v("li",[_._v("概念结构是各种数据模型的共同基础，它比数据逻辑模型和物理模型更独立于机器、更抽象，从而更加稳定")]),_._v(" "),v("li",[_._v("概念结构设计是整个数据库设计的关键")])]),_._v(" "),v("p",[_._v("概念模型：从现实世界抽象出的模型")]),_._v(" "),v("ul",[v("li",[_._v("能真实、充分地反映现实世界")]),_._v(" "),v("li",[_._v("易于理解")]),_._v(" "),v("li",[_._v("易于更改")]),_._v(" "),v("li",[_._v("易于向关系、网状、层次等各种数据模型转换")])]),_._v(" "),v("h3",{attrs:{id:"逻辑结构设计"}},[_._v("逻辑结构设计")]),_._v(" "),v("p",[v("code",[_._v("E-R")]),_._v("模型：描述概念模型的工具")]),_._v(" "),v("ul",[v("li",[_._v("消除冲突\n"),v("ul",[v("li",[_._v("属性冲突")]),_._v(" "),v("li",[_._v("命名冲突")]),_._v(" "),v("li",[_._v("结构冲突")])])]),_._v(" "),v("li",[_._v("消除不必要的冗余**，**设计生成基本E-R图\n"),v("ul",[v("li",[_._v("分析方法")]),_._v(" "),v("li",[_._v("规范化理论")])])])]),_._v(" "),v("p",[_._v("数据模型的优化")]),_._v(" "),v("ul",[v("li",[_._v("极小化数据依赖")]),_._v(" "),v("li",[_._v("确定关系模式范式，进行范式的合并或分解")]),_._v(" "),v("li",[_._v("对关系模式进行分解，提高数据操作效率和存储空间\n"),v("ul",[v("li",[_._v("水平分解：从行上分解，如"),v("code",[_._v("stu")]),_._v("分成"),v("code",[_._v("stu1,stu2")]),_._v("两张表存，"),v("code",[_._v("base")]),_._v("分成"),v("code",[_._v("base1,base2")]),_._v("两个库存")]),_._v(" "),v("li",[_._v("垂直分解：从列上分解，保持连接无损性")])])])]),_._v(" "),v("h3",{attrs:{id:"数据库的物理设计"}},[_._v("数据库的物理设计")]),_._v(" "),v("p",[_._v("数据库在物理设备上的存储结构与存取方法称为数据库的物理结构，它依赖于选定的数据库管理系统")]),_._v(" "),v("p",[_._v("数据库管理系统常用存取方法：")]),_._v(" "),v("ul",[v("li",[_._v("B+树索引存取方法")]),_._v(" "),v("li",[_._v("Hash索引存取方法")]),_._v(" "),v("li",[_._v("聚簇存取方法")])]),_._v(" "),v("p",[_._v("聚簇的作用：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("大大提高按聚簇码进行查询的效率")]),_._v(" "),v("p",[_._v("如果将同一系的学生元组集中存放，则每读一个物理块可得到多个满足查询条件的元组")])]),_._v(" "),v("li",[v("p",[_._v("节省存储空间")]),_._v(" "),v("p",[_._v("聚簇以后，聚簇码相同的元组集中在一起了")])])]),_._v(" "),v("p",[_._v("聚簇的局限性：")]),_._v(" "),v("ul",[v("li",[_._v("聚簇只能提高某些特定应用的性能")]),_._v(" "),v("li",[_._v("建立与维护聚簇的开销相当大")])]),_._v(" "),v("p",[_._v("确定数据存放位置和存储结构的因素")]),_._v(" "),v("ul",[v("li",[_._v("存取时间")]),_._v(" "),v("li",[_._v("存储空间利用率")]),_._v(" "),v("li",[_._v("维护代价")])]),_._v(" "),v("p",[_._v("确定数据存放位置和存储结构的基本原则")]),_._v(" "),v("ul",[v("li",[_._v("易变部分与稳定部分分开存放")]),_._v(" "),v("li",[_._v("经常存取部分与存取频率较低部分分开存放")])]),_._v(" "),v("h2",{attrs:{id:"数据库编程"}},[_._v("数据库编程")]),_._v(" "),v("blockquote",[v("p",[_._v("如何在应用程序中去访问和管理数据库")]),_._v(" "),v("p",[_._v("编程技术的概念、方法："),v("code",[_._v("嵌入SQL、PL/SQL、ODBC")])])]),_._v(" "),v("p",[_._v("略，参考"),v("code",[_._v("jdbc")])]),_._v(" "),v("h2",{attrs:{id:"关系查询处理和查询优化"}},[_._v("关系查询处理和查询优化")]),_._v(" "),v("h3",{attrs:{id:"关系数据库系统的查询处理"}},[_._v("关系数据库系统的查询处理")]),_._v(" "),v("p",[v("code",[_._v("RDBMS")]),_._v("查询处理步骤：")]),_._v(" "),v("ul",[v("li",[_._v("查询分析：对SQL查询语句进行扫描，进行词法分析和语法分析")]),_._v(" "),v("li",[_._v("查询检查\n"),v("ul",[v("li",[_._v("合法权检查")]),_._v(" "),v("li",[_._v("视图转换")]),_._v(" "),v("li",[_._v("安全性检查")]),_._v(" "),v("li",[_._v("完整性初步检查")])])]),_._v(" "),v("li",[_._v("查询优化：选择一个高效执行的查询处理策略")]),_._v(" "),v("li",[_._v("查询执行：两种执行方法\n"),v("ul",[v("li",[_._v("自顶向下")]),_._v(" "),v("li",[_._v("自底向上")])])])]),_._v(" "),v("p",[_._v("常见查询算法：")]),_._v(" "),v("ul",[v("li",[_._v("全表扫描算法")]),_._v(" "),v("li",[_._v("索引扫描算法")])]),_._v(" "),v("p",[_._v("连接算法：")]),_._v(" "),v("ul",[v("li",[_._v("嵌套循环算法(nested loop join)")]),_._v(" "),v("li",[_._v("排序-合并算法(sort-merge join或merge join)")]),_._v(" "),v("li",[_._v("索引连接(index join)算法")]),_._v(" "),v("li",[_._v("Hash Join算法")])]),_._v(" "),v("h3",{attrs:{id:"关系数据库系统的查询优化"}},[_._v("关系数据库系统的查询优化")]),_._v(" "),v("ul",[v("li",[_._v("是关系数据库管理系统实现的关键技术又是关系系统的优点所在")]),_._v(" "),v("li",[_._v("减轻了用户选择存取路径的负担")])]),_._v(" "),v("p",[_._v("数据库执行代价考虑：")]),_._v(" "),v("ul",[v("li",[_._v("集中式数据库：执行开销主要包括\n"),v("ul",[v("li",[_._v("磁盘存取块数(I/O代价)")]),_._v(" "),v("li",[_._v("处理机时间(CPU代价)")]),_._v(" "),v("li",[_._v("查询的内存开销")]),_._v(" "),v("li",[_._v("I/O代价是最主要的")])])]),_._v(" "),v("li",[_._v("分布式数据库\n"),v("ul",[v("li",[_._v("总代价 = I/O代价 + CPU代价 + 内存代价＋通信代价")])])])]),_._v(" "),v("h3",{attrs:{id:"代数优化"}},[_._v("代数优化")]),_._v(" "),v("p",[_._v("关系代数表达式等价变换规则：运用离散数学的知识简化关系代数表达式")]),_._v(" "),v("p",[_._v("查询树的启发式优化：")]),_._v(" "),v("ul",[v("li",[_._v("选择运算应尽可能先做。在优化策略中这是最重要、最基本的一条")]),_._v(" "),v("li",[_._v("把投影运算和选择运算同时进行")]),_._v(" "),v("li",[_._v("把投影同其前或其后的双目运算结合起来")]),_._v(" "),v("li",[_._v("把某些选择同在它前面要执行的笛卡尔积结合起来成为一个连接运算")]),_._v(" "),v("li",[_._v("找出公共子表达式")])]),_._v(" "),v("h3",{attrs:{id:"物理优化"}},[_._v("物理优化")]),_._v(" "),v("p",[_._v("物理优化就是要选择高效合理的操作算法或存取路径，求得优化的查询计划")]),_._v(" "),v("p",[_._v("物理优化方法：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("基于规则的启发式优化")]),_._v(" "),v("ul",[v("li",[_._v("启发式规则是指那些在大多数情况下都适用，但不是在每种情况下都是适用的规则")])])]),_._v(" "),v("li",[v("p",[_._v("基于代价估算的优化")]),_._v(" "),v("ul",[v("li",[_._v("优化器估算不同执行策略的代价，并选出具有最小代价的执行计划")])])]),_._v(" "),v("li",[v("p",[_._v("两者结合的优化方法：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("常常先使用启发式规则，选取若干较优的候选方案，减少代价估算的工作量")]),_._v(" "),v("p",[_._v("然后分别计算这些候选方案的执行代价，较快地选出最终的优化方案")])])])])]),_._v(" "),v("h2",{attrs:{id:"数据库恢复技术"}},[_._v("数据库恢复技术")]),_._v(" "),v("p",[_._v("略")]),_._v(" "),v("h2",{attrs:{id:"并发控制"}},[_._v("并发控制")]),_._v(" "),v("p",[_._v("略")]),_._v(" "),v("h2",{attrs:{id:"数据库管理系统"}},[_._v("数据库管理系统")]),_._v(" "),v("p",[_._v("略")])])}),[],!1,null,null,null);v.default=d.exports}}]);