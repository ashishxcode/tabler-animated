"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 8h4v4h-4l0 -4"}],["path",{"d":"M6 4l0 4"}],["path",{"d":"M6 12l0 8"}],["path",{"d":"M10 14h4v4h-4l0 -4"}],["path",{"d":"M12 4l0 10"}],["path",{"d":"M12 18l0 2"}],["path",{"d":"M16 5h4v4h-4l0 -4"}],["path",{"d":"M18 4l0 1"}],["path",{"d":"M18 9l0 11"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,3,5,6,7],"o":[12,12],"d":[2.2,0]},{"fx":"nudge","n":[2],"o":[6,16],"d":[2.2,0]},{"fx":"pop","n":[4,8],"o":[15,12],"a":0.04}];

export const AdjustmentsAltIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AdjustmentsAltIcon.displayName = "AdjustmentsAltIcon";
