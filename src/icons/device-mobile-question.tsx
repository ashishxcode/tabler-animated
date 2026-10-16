"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 21h-7a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v6"}],["path",{"d":"M19 22v.01"}],["path",{"d":"M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"}],["path",{"d":"M11 4h2"}],["path",{"d":"M12 17v.01"}]];
const rig: Rig[] = [{"fx":"draw","n":[1,2],"o":[19.25,18.51],"dl":0.2,"st":0.08},{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[3,4],"a":0.22,"dl":0.1,"st":0.07,"os":[[12,4],[12,17.01]]}];

export const DeviceMobileQuestionIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DeviceMobileQuestionIcon.displayName = "DeviceMobileQuestionIcon";
