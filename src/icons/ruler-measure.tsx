"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19.875 12c.621 0 1.125 .512 1.125 1.143v5.714c0 .631 -.504 1.143 -1.125 1.143h-15.875a1 1 0 0 1 -1 -1v-5.857c0 -.631 .504 -1.143 1.125 -1.143h15.75"}],["path",{"d":"M9 12v2"}],["path",{"d":"M6 12v3"}],["path",{"d":"M12 12v3"}],["path",{"d":"M18 12v3"}],["path",{"d":"M15 12v2"}],["path",{"d":"M3 3v4"}],["path",{"d":"M3 5h18"}],["path",{"d":"M21 3v4"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2,3,4,5,6,7,8],"o":[12,20],"a":-16}];

export const RulerMeasureIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RulerMeasureIcon.displayName = "RulerMeasureIcon";
