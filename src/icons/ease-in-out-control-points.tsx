"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M17 20h-2"}],["path",{"d":"M7 4a2 2 0 1 1 -4 0a2 2 0 0 1 4 0"}],["path",{"d":"M7 4h2"}],["path",{"d":"M14 4h-2"}],["path",{"d":"M12 20h-2"}],["path",{"d":"M3 20c8 0 10 -16 18 -16"}]];
const rig: Rig[] = [{"fx":"pop","n":[6],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[19,20],[16,20],[5,4],[8,4],[13,4],[11,20]]}];

export const EaseInOutControlPointsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
EaseInOutControlPointsIcon.displayName = "EaseInOutControlPointsIcon";
