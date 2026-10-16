"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 20h.01"}],["path",{"d":"M4 20h.01"}],["path",{"d":"M8 20h.01"}],["path",{"d":"M12 20h.01"}],["path",{"d":"M16 20h.01"}],["path",{"d":"M20 4h.01"}],["path",{"d":"M4 4h.01"}],["path",{"d":"M8 4h.01"}],["path",{"d":"M12 4h.01"}],["path",{"d":"M16 4l0 .01"}],["path",{"d":"M4 9a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1l0 -6"}]];
const rig: Rig[] = [{"fx":"pop","n":[10],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,2,3,4,5,6,7,8,9],"a":0.24,"dl":0.1,"st":0.07,"os":[[20.01,20],[4.01,20],[8,20],[12.01,20],[16.01,20],[20.01,4],[4.01,4],[8,4],[12.01,4],[16,4.01]]}];

export const SectionIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SectionIcon.displayName = "SectionIcon";
