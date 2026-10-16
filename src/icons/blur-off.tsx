"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 3v5m0 4v8"}],["path",{"d":"M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098"}],["path",{"d":"M16 12h5"}],["path",{"d":"M13 9h7"}],["path",{"d":"M12 6h6"}],["path",{"d":"M12 18h6"}],["path",{"d":"M12 15h3m4 0h1"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[7],"o":[12,12],"dl":0.25},{"fx":"pop","n":[5,6],"o":[16,16.5],"a":0.35,"dl":0.2},{"fx":"pop","n":[1],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,11.5],[18.5,12],[16.5,9],[15,6]]}];

export const BlurOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BlurOffIcon.displayName = "BlurOffIcon";
