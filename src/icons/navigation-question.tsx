"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16.081 11.847l-4.081 -8.847l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l7.265 -2.463c1.35 .458 2.362 .8 3.037 1.03"}],["path",{"d":"M19 22v.01"}],["path",{"d":"M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"}]];
const rig: Rig[] = [{"fx":"draw","n":[1,2],"o":[19.25,18.51],"dl":0.2,"st":0.08},{"fx":"pop","n":[0],"o":[10.04,12],"a":0.06}];

export const NavigationQuestionIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
NavigationQuestionIcon.displayName = "NavigationQuestionIcon";
