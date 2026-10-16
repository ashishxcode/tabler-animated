"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 17h-10a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7.5"}],["path",{"d":"M3 13h11.5"}],["path",{"d":"M8 21h7"}],["path",{"d":"M10 17l-.5 4"}],["path",{"d":"M14 17l.5 4"}],["path",{"d":"M19 22v.01"}],["path",{"d":"M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"}]];
const rig: Rig[] = [{"fx":"draw","n":[4,5,6],"o":[17.5,18.51],"dl":0.2,"st":0.08},{"fx":"pop","n":[0],"o":[12,10],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.22,"dl":0.1,"st":0.07,"os":[[8.75,13],[11.5,21],[9.75,19]]}];

export const DeviceImacQuestionIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceImacQuestionIcon.displayName = "DeviceImacQuestionIcon";
