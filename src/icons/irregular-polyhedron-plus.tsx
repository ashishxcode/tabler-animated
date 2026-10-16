"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18 12l1.752 -6.13a1 1 0 0 0 -.592 -1.205l-6.282 -2.503a2.46 2.46 0 0 0 -1.756 0l-6.282 2.503a1 1 0 0 0 -.592 1.204l1.752 6.131l-1.752 6.13a1 1 0 0 0 .592 1.205l6.282 2.503a2.46 2.46 0 0 0 1.756 0l.221 -.088"}],["path",{"d":"M4.5 5.5l6.622 2.33a2.35 2.35 0 0 0 1.756 0l6.622 -2.33"}],["path",{"d":"M6 12l5.21 1.862a2.34 2.34 0 0 0 1.58 0l5.21 -1.862"}],["path",{"d":"M12 22v-14"}],["path",{"d":"M16 19h6"}],["path",{"d":"M19 16v6"}]];
const rig: Rig[] = [{"fx":"draw","n":[4,5],"o":[19,19],"dl":0.2,"st":0.08},{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.12}];

export const IrregularPolyhedronPlusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
IrregularPolyhedronPlusIcon.displayName = "IrregularPolyhedronPlusIcon";
