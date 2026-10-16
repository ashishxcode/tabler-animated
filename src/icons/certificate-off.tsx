"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12.876 12.881a3 3 0 0 0 4.243 4.243m.588 -3.42a3.012 3.012 0 0 0 -1.437 -1.423"}],["path",{"d":"M13 17.5v4.5l2 -1.5l2 1.5v-4.5"}],["path",{"d":"M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2m4 0h10a2 2 0 0 1 2 2v10"}],["path",{"d":"M6 9h3m4 0h5"}],["path",{"d":"M6 12h3"}],["path",{"d":"M6 15h2"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[6],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1],"o":[15,19.75],"a":0.35,"dl":0.2},{"fx":"draw","n":[0,3],"o":[12,13.5],"dl":0.05,"st":0.07},{"fx":"draw","n":[4,5],"o":[7.5,13.5],"dl":0.2},{"fx":"pop","n":[2],"o":[12,12],"a":0.04}];

export const CertificateOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CertificateOffIcon.displayName = "CertificateOffIcon";
