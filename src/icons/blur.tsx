"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 21a9.01 9.01 0 0 0 2.32 -.302a9 9 0 0 0 1.74 -16.733a9 9 0 1 0 -4.06 17.035"}],["path",{"d":"M12 3v17"}],["path",{"d":"M12 12h9"}],["path",{"d":"M12 9h8"}],["path",{"d":"M12 6h6"}],["path",{"d":"M12 18h6"}],["path",{"d":"M12 15h8"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12.01,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,11.5],[16.5,12],[16,9],[15,6],[15,18],[16,15]]}];

export const BlurIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BlurIcon.displayName = "BlurIcon";
