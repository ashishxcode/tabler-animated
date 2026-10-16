"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 12v-9l4.912 1.914a1.7 1.7 0 0 1 .428 2.925l-5.34 4.161"}],["path",{"d":"M14.424 15.03l-2.424 -3.03h6"}],["path",{"d":"M12 12h-9l1.914 -4.912a1.7 1.7 0 0 1 2.925 -.428l4.161 5.34"}],["path",{"d":"M12 12v9l-4.912 -1.914a1.7 1.7 0 0 1 -.428 -2.925l5.34 -4.161"}],["path",{"d":"M18 17l2 -2v6"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4],"o":[11.5,12],"d":[2.4,0]}];

export const CarFan1Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CarFan1Icon.displayName = "CarFan1Icon";
